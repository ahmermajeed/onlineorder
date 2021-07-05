<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\Orders;
use App\Data\Models\Products;
use App\Data\Models\UserDevices;
use App\Data\Repositories\OrderRepository;
use App\Http\Controllers\Controller;
use App\PayPal;
use Cartalyst\Stripe\Exception\CardErrorException;
use Edujugon\PushNotification\PushNotification;
use Illuminate\Http\Request;
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
        $categories = [24=>'SMALL PIZZA',25=>'MEDIUM PIZZA',26=>'LARGE PIZZA'];
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
            'order_details.*.quantity' => 'required',
            'card_no' => 'required_if:payment,credit_card',
            'ccExpiryMonth' => 'required_if:payment,credit_card',
            'ccExpiryYear' => 'required_if:payment,credit_card',
            'cvvNumber' => 'required_if:payment,credit_card'
        ]);

//        foreach ($requestData['order_details'] as $key => $value){
//            if($value['product_type'] == 'product'){
//                $product = Products::where('id',$value['product_id'])->select('id_category')->first();
//                if(isset($categories[$product->id_category])){
//                    $requestData['order_details'][$key]['product_name'] = $categories[$product->id_category]." ".$value['product_name'];
//                }
//            }
//
//        }

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        if ($requestData['payment'] == "credit_card") {
            $charge = $this->stripeCharge($requestData);

            if($charge['status'] == "succeeded")
                $data = $this->_repository->placeOrder($requestData);
            else
                $code = 401;
            $output = ['error' => ['code' => 401, 'message' => $charge['message']]];
            return response()->json($output, $code);

        } else {
            $data = $this->_repository->placeOrder($requestData);
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
            ]
        ])->setDevicesToken($devices)->send();

        $response = $push->getFeedback();
    }

    public function stripeCharge($data)
    {
        $stripe = Stripe::make(env('STRIPE_SECRET'));

        try {
            $token = $stripe->tokens()->create([
                'card' => [
                    'number' => $data['user_data']['card_number'],
                    'exp_month' => $data['user_data']['expiration_month'],
                    'exp_year' => $data['user_data']['expiration_year'],
                    'cvc' => $data['user_data']['cvc'],
                ],
            ]);

            if (!isset($token['id'])) {

                $data["status"] = "declined";
                $data["message"] = "invalid API key";

                return $data;
            }

            $charge = $stripe->charges()->create([
                'card' => $token['id'],
                'currency' => 'GBP',
                'amount' => $data['total_amount_with_fee'],
                'description' => 'pizza passions online order',
            ]);

            return $charge;

        } catch (Exception | CardErrorException | MissingParameterException $e) {

            $data["status"] = "declined";
            $data["message"] = $e->getMessage();

            return $data;

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
}
