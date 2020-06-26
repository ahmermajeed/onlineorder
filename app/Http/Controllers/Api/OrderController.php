<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\UserDevices;
use App\Data\Repositories\OrderRepository;
use App\Http\Controllers\Controller;
use Edujugon\PushNotification\PushNotification;
use Illuminate\Http\Request;
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
            'order_details.*.quantity' => 'required',
            'card_no' => 'required_if:payment,credit_card',
            'ccExpiryMonth' => 'required_if:payment,credit_card',
            'ccExpiryYear' => 'required_if:payment,credit_card',
            'cvvNumber' => 'required_if:payment,credit_card'
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        $data = $this->_repository->placeOrder($requestData);

        if ($data) {

            if ($requestData['payment'] == "credit_card") {
                $this->stripeCharge($requestData);
            }

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
                'order_id' => $data->id
            ]
        ])->setDevicesToken($devices)->send();

        $response = $push->getFeedback();
    }

    /** Send Push Notification */
    public function stripeCharge($data)
    {
        $stripe = Stripe::make(env('STRIPE_SECRET'));

        try {
            $token = $stripe->tokens()->create([
                'card' => [
                    'number' => $data['card_no'],
                    'exp_month' => $data['ccExpiryMonth'],
                    'exp_year' => $data['ccExpiryYear'],
                    'cvc' => $data['cvvNumber'],
                ],
            ]);

            print_r($token);
            exit;

            if (!isset($token['id'])) {
                return redirect()->route('addmoney.paymentstripe');
            }
            $charge = $stripe->charges()->create([
                'card' => $token['id'],
                'currency' => 'USD',
                'amount' => 20.49,
                'description' => 'wallet',
            ]);

            if ($charge['status'] == 'succeeded') {
                echo "<pre>";
                print_r($charge);
                exit();
                return redirect()->route('addmoney.paymentstripe');
            } else {
                \Session::put('error', 'Money not add in wallet!!');
                return redirect()->route('addmoney.paymentstripe');
            }
        } catch (Exception $e) {
            \Session::put('error', $e->getMessage());
            return redirect()->route('addmoney.paymentstripe');
        } catch (\Cartalyst\Stripe\Exception\CardErrorException $e) {
            \Session::put('error', $e->getMessage());
            return redirect()->route('addmoney.paywithstripe');
        } catch (\Cartalyst\Stripe\Exception\MissingParameterException $e) {
            \Session::put('error', $e->getMessage());
            return redirect()->route('addmoney.paymentstripe');
        }

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
