<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\Orders;
use App\Data\Models\Products;
use App\Data\Models\UserDevices;
use App\Data\Repositories\OrderRepository;
use App\External\Gateway;
use App\Http\Controllers\Controller;
use App\PayPal;
use App\User;
use Edujugon\PushNotification\PushNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Cashier\Exceptions\IncompletePayment;
use Laravel\Cashier\Exceptions\PaymentActionRequired;
use Omnipay\Common\CreditCard;
use Omnipay\Omnipay;
use Validator;
use Stripe\Error\Card;
use Cartalyst\Stripe\Stripe;
use Symfony\Component\HttpFoundation\Response;

class OrderController extends Controller
{
    protected $_repository;
    const PER_PAGE = 10;

    public function __construct(OrderRepository $repository)
    {
        $this->_repository = $repository;
    }

    public function getAllOrders(Request $request)
    {
        $requestData = $request->all();
        $pagination = !empty($requestData['pagination']) ? $requestData['pagination'] : false;
        $per_page = self::PER_PAGE;

        $data = $this->_repository->findByAll($pagination, $per_page, $requestData);

        $output = [
            'data' => $data['data'],
            'pagination' => !empty($data['pagination']) ? $data['pagination'] : false,
            'message' => "Orders Retrieved Successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }

    public function updateOrderStatus(Request $request, $id)
    {
        $requestData = $request->all();
        $requestData['id'] = $id;

        $validator = Validator::make($requestData, [
            'id' => 'required|exists:orders,id',
            'status' => 'required'
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        $data = $this->_repository->updateRecord($requestData, $id);

        $output = ['data' => $data, 'message' => "your order status has been updated successfully"];
        return response()->json($output, Response::HTTP_OK);
    }

    public function placeOrder(Request $request)
    {
        $requestData = $request->all();

        $validator = Validator::make($requestData, [
            'user_id' => 'required',
            'total_amount_with_fee' => 'required',
            'delivery_fees' => 'required',
            'payment' => 'required',
            'delivery_address' => 'required',
            'order_details' => 'required|array',
            'order_details.*.price' => 'required|numeric',
            'order_details.*.product_id' => 'required|numeric',
            'order_details.*.product_name' => 'required',
            'order_details.*.quantity' => 'required'
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        $data = $this->_repository->placeOrder($requestData);

        if ($data) {

            $requestData['user_id'] = $data['user_id'];
            $requestData['phone_number'] = $data['phone_number'];
            $requestData['total_amount'] = $requestData['total_amount_with_fee'];

            $this->sendNotification($data);
        }

        $requestData['order_id'] = $data['order_id'];
        $output = ['data' => $requestData, 'message' => "your order has been placed successfully "];
        return response()->json($output, Response::HTTP_OK);
    }

    public function stripePayment(Request $request)
    {
        $requestData = $request->all();

        $validator = Validator::make($requestData, [
            'user_id' => 'required',
            'total_amount_with_fee' => 'required',
            'delivery_fees' => 'required',
            'payment' => 'required',
            'delivery_address' => 'required',
            'order_details' => 'required|array',
            'order_details.*.price' => 'required|numeric',
            'order_details.*.product_id' => 'required|numeric',
            'order_details.*.product_name' => 'required',
            'order_details.*.quantity' => 'required'
        ]);

        $user = User::firstOrCreate(
            [
                "email" => $requestData['user_data']['email']
            ],
            [
                "password" => Hash::make(Str::random(12)),
                "name" =>  $requestData['user_data']['name'],
                "phone_number" => $requestData['user_data']['number']
            ]
        );

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        try {

            $payment = $user->charge(
                $requestData['total_amount_with_fee']*100,
                $requestData['payment_method_id']
            );

            $payment = $payment->asStripePaymentIntent();

            $data = $this->_repository->placeOrder($requestData);

        } catch (IncompletePayment $e) {

            if ($e instanceof PaymentActionRequired) {

                $code = 401;
                $output = ['error' => ['code' => 402, 'payment_data' => $e->payment]];
                return response()->json($output, $code);

            } else {

                $code = 401;
                $output = ['error' => ['code' => 401, 'message' => $e->getMessage()]];
                return response()->json($output, $code);
            }

        }

        if ($data) {

            $requestData['user_id'] = $data['user_id'];
            $requestData['phone_number'] = $data['phone_number'];
            $requestData['total_amount'] = $requestData['total_amount_with_fee'];

            $this->sendNotification($data);
        }

        $output = ['data' => $requestData, 'message' => "your order has been placed successfully "];
        return response()->json($output, Response::HTTP_OK);
    }

    public function cardStreamPayment(Request $request) {

        $requestData = $request->all();

        $req = array(
            //'merchantID' => 100856,
            'merchantID' => 133016,
            'action' => 'SALE',
            'type' => 1,
            'currencyCode' => 826,
            'countryCode' => 826,
            'amount' => 15001,
            'cardNumber' => '4012001037141112',
            'cardExpiryMonth' => 12,
            'cardExpiryYear' => 25,
            'cardCVV' => '083',
            'customerName' => 'Test Customer',
            'customerEmail' => 'test@testcustomer.com',
            'customerAddress' => '16 Test Street',
            'customerPostCode' => 'TE15 5ST',
            'orderRef' => 'Test purchase',
            // The following fields are only mandatory for 3DS v2 direct integration
            'remoteAddress' => $_SERVER['REMOTE_ADDR'],
            'threeDSRedirectURL' => 'https://aisha-cafe.softdemo.co.uk/stream-check-out'
        );

        $return = Gateway::directRequest($req);

        if($return['responseCode'] === 65802) {
            $code = 401;
            $output = ['error' => ['code' => 402, 'payment_data' => $return]];
            return response()->json($output, $code);
        }

    }

    /** Send Push Notification */
    public function sendNotification($data)
    {

        $devices = UserDevices::get()->pluck('device_token')->toArray();

        $push = new PushNotification('fcm');

        $push->setMessage([
            'data' => [
                'title' => 'This is the title',
                'body' => 'New order has been placed to your restaurant',
                'sound' => 'default',
                'order_id' => $data->id,
                'total_amount'=> $data->total_amount_with_fee,
                'reference'=>$data->reference,
                'order_type'=> $data->order_type,
                'payment'=>$data->payment,
                'is_pos' => $data->is_pos
            ]
        ])->setDevicesToken($devices)->send();

        $response = $push->getFeedback();
    }

    public function stripeCharge($data)
    {
        //$stripe = Stripe::make(env('STRIPE_SECRET'));

        $stripe = Stripe::make(env('STRIPE_KEY'), '2020-08-27');

        try {
            $token = $stripe->tokens()->create([
                'card' => [
                    'number' => $data['card_no'],
                    'exp_month' => $data['ccExpiryMonth'],
                    'exp_year' => $data['ccExpiryYear'],
                    'cvc' => $data['cvvNumber'],
                ],
            ]);

            if (!isset($token['id'])) {
                return redirect()->route('addmoney.paymentstripe');
            }
            $charge = $stripe->charges()->create([
                'card' => $token['id'],
                'currency' => 'GBP',
                'amount' => $data['total_amount_with_fee'],
                'description' => 'wallet',
            ]);

            if ($charge['status'] == 'succeeded') {
                return  ["status" => $charge['status'], "data" => $charge];
                //           return redirect()->route('addmoney.paymentstripe');
            } else {
                \Session::put('error', 'Money not add in wallet!!');

                $code = "401";
                $output = ['code' => $code, 'message' => "Money not add in wallet!!"];
                return $output;


//                return redirect()->route('addmoney.paymentstripe');
            }
        } catch (Exception $e) {
            \Session::put('error', $e->getMessage());
//            return redirect()->route('addmoney.paymentstripe');

            $code = 401;
            $output = ['status' => $code, 'message' => $e->getMessage()];
            return $output;


        } catch (\Cartalyst\Stripe\Exception\CardErrorException $e) {
            \Session::put('error', $e->getMessage());

            $code = 401;
            $output = ['status' => $code, 'message' => $e->getMessage()];
            return $output;

            //return redirect()->route('addmoney.paywithstripe');
        } catch (\Cartalyst\Stripe\Exception\MissingParameterException $e) {

            $code = 401;
            $output = ['status' => $code, 'message' => $e->getMessage()];
            return $output;

            \Session::put('error', $e->getMessage());
//            return redirect()->route('addmoney.paymentstripe');
        }

    }

    public function paypalPayment($requestData)
    {
        $paypal = new PayPal;

        $card = new CreditCard(array(
            'firstName' => $requestData['user_data']['name'],
            'lastName' =>  $requestData['user_data']['name'],
            'number'                => $requestData['user_data']['card_no'],
            'expiryMonth'           => $requestData['user_data']['expiration_month'],
            'expiryYear'            => $requestData['user_data']['expiration_year'],
            'cvv'                   => $requestData['user_data']['cvc'],
            /* 'billingAddress1'       => '1 Scrubby Creek Road',
             'billingCountry'        => 'AU',
             'billingCity'           => 'Scrubby Creek',
             'billingPostcode'       => '4999',
             'billingState'          => 'QLD',*/
        ));

        $response = $paypal->purchase([
            'amount' => $paypal->formatAmount($requestData['total_amount_with_fee']),
            'currency' => 'USD',
            'card'     => $card,
            'description'   => 'This is a test purchase transaction.',
        ]);

        return $response;
    }

    public function getTotalSales(Request $request)
    {
        $requestData = $request->all();

        $validator =  Validator::make($requestData, [
            'start_date' => 'required',
            'end_date' => 'required'
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        $data = $this->_repository->getTotalSales($requestData);

        $output = ['data' => ['total_sales' => $data, 'most_sale_item' => "Margherita Pizza", 'tota_orders' => 15], 'message' => "your order has been placed successfully "];
        return response()->json($output, Response::HTTP_OK);
    }

    public function getOrderDetails($id){
        $data = $this->_repository->findById($id);
        $output = [
            'data' =>$data,
            'pagination' => !empty($data['pagination']) ? $data['pagination'] : false,
            'message' => "Orders Retrieved Successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }

    public function getKitchenOrders(Request $request)
    {
        $requestData = $request->all();
        $pagination = !empty($requestData['pagination']) ? $requestData['pagination'] : false;
        $per_page = self::PER_PAGE;

        $data = $this->_repository->getKitchenOrders($pagination, $per_page, $requestData);

        $output = [
            'data' => $data,
            'pagination' => !empty($data['pagination']) ? $data['pagination'] : false,
            'message' => "Orders Retrieved Successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }

    public function cardStreamCallback(Request $request)
    {
        $requestData = $request->all();

        echo "test";
        print_r($requestData);
        exit;
    }

}
