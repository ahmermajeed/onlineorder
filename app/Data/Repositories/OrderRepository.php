<?php

namespace App\Data\Repositories;

use App\Data\Models\OrderDetail;
use App\Data\Models\Orders;
use App\Data\Models\UserAddress;
use App\User;
use function App\Helpers\paginator;

class OrderRepository
{
    protected $model;

    public function __construct(Orders $model) {
        $this->model = $model;
    }

    /**
     * @param bool $pagination
     * @param int $perPage
     * @param array $input
     * @return array|mixed
     */
    public function findByAll($pagination = false,$perPage = 10, $input = [])
    {
        $data = array();
        $model = $this->model->orderBy('id', 'desc');

        if ($pagination) {
            $model = $model->paginate($perPage);
            $data['data'] = $model->items();
            $data = paginator($data, $model);
        } else {
            $data['data'] = $model->get();
        }


        foreach ($data['data']  as $key =>$value){
            $user = User::find($value['user_id']);
            if($user){
                $data['data'][$key]['phone_number'] = $user->phone_number;
            }else {
                $data['data'][$key]['phone_number'] = 78601;
            }

        }



        return $data;
    }

    /**
     * @param $id
     * @return array|null
     */
    public function findById($id)
    {
        $data = array();
        $query = $this->model->find($id);

        if ($query != NULL) {
            $data = $query;
        } else {
            $data = null;
        }

        return $data;
    }

    /**
     * @param $request
     * @param $id
     * @return mixed
     */
    public function updateRecord($request, $id)
    {
        $data = $this->model->findOrFail($id);
        $data->fill($request)->save();
        return $data;
    }

    public function placeOrder($data) {
        $data['reference'] = random_int(1000, 9999);
        $password = "yousuf+1";

        if(isset($data['user_data']))
        {
            $userData = User::where('email',$data['user_data']['email'])->first();
            if(!$userData){
                $userData = User::create(['name'=>$data['user_data']['name'],'email'=>$data['user_data']['email'],'password'=>bcrypt($password),'phone_number'=>$data['user_data']['number']]);
                $userAddress = UserAddress::create(['user_id'=>$userData->id,'address'=>isset($data['user_data']['address'])?$data['user_data']['address']:'','street'=>isset($data['user_data']['street']) ? $data['user_data']['street']:'','town'=>isset($data['user_data']['town']) ? $data['user_data']['town']:'','postal_code'=>isset($data['user_data']['postal_code']) ? $data['user_data']['postal_code']:'','active'=>1]);
            }
        }

<<<<<<< HEAD
        $transaction_id = rand(10000000,99999999);

        $placed = $this->model->create(["user_id" => isset($userData->id) ? $userData->id:'1', "reference" => $data['reference'], "total_amount_with_fee" => $data['total_amount_with_fee'], "delivery_fees" => $data['delivery_fees'], "payment" => $data['payment'], "order_type" => $data['order_type'], "delivery_address" => $data['delivery_address'], "status" => "Order Placed", 'transaction_id' => $transaction_id]);
=======
        $placed = $this->model->create(["user_id" => isset($userData->id) ? $userData->id:'1', "reference" => $data['reference'], "total_amount_with_fee" => $data['total_amount_with_fee'], "delivery_fees" => $data['delivery_fees'], "payment" => $data['payment'], "order_type" => $data['order_type'], "delivery_address" => $data['delivery_address'], "status" => "Order Placed",'discounted_amount'=>isset($data['discounted_amount'])?$data['discounted_amount']:0]);
>>>>>>> 5b863f1f1379ae3527064ddc713aeafc0b13f7a0

        if($placed) {
            foreach ($data['order_details'] as $detail) {

                if(isset($detail['extras'])) {
                  $detail['extras'] = json_encode($detail['extras']);
                }

                $detail['order_id'] = $placed['id'];
                OrderDetail::create($detail);
            }

            $placed['phone_number'] =$userData->phone_number;
        }


        return $placed;
    }

    public function getTotalSales($data) {

        $totalSale = $this->model->where('status', 'delivered')->sum('total_amount_with_fee');
        return $totalSale;
    }
}
