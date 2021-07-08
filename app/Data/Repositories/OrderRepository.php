<?php

namespace App\Data\Repositories;

use App\Data\Models\OrderDetail;
use App\Data\Models\Orders;
use App\Data\Models\TableReservation;
use App\Data\Models\UserAddress;
use App\Mail\OrderPlace;
use App\User;
use Illuminate\Support\Facades\Mail;
use League\CommonMark\Extension\TableOfContents\TableOfContentsBuilder;
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
        if(isset($input['order_type']) &&  $input['order_type'] == 'Table'){
            $model->where('order_type',$input['order_type']);
        }

        if ($pagination) {
            $model = $model->paginate($perPage);
            $data['data'] = $model->items();
            $data = paginator($data, $model);
        } else {
            $data['data'] = $model->get();
        }
        foreach ($data['data']  as $key =>$value){
            $user = User::find($value['user_id']);
            $table = TableReservation::where('id',$value['table_id'])->first();

            if($user){
                $data['data'][$key]['phone_number'] = $user->phone_number;
                $data['data'][$key]['email'] = $user->email;
                $data['data'][$key]['name'] = $user->name;
                $data['data'][$key]['table_name'] = null;
                if(isset($input['order_type']) &&  $input['order_type'] == 'Table' && $table){
                    $data['data'][$key]['table_name']  = $table->name;
               }
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
        $user = User::where('id',$data->user_id)->first();
        $data->phone_number = "Number Not Found";
        $data->email = "Not Found";
        $data->name = "Not Found";
        $data->table_name ="Not Found";
       
        if($user){
            $data->phone_number = $user->phone_number;
            $data->email = $user->email;
            $data->name = $user->name;
        }
        $tableReservation =TableReservation::where('id',$data->table_id)->first();


        if($tableReservation){
            $data->table_name = $tableReservation->name;
            $data->table_id = $tableReservation->id;
        }


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
            $transaction_id = rand(10000000,99999999);
           // Mail::to($data['user_data']['email'])->send(new OrderPlace($data));
        }



        $placed = $this->model->create(["user_id" => isset($userData->id) ? $userData->id:'1', "reference" => $data['reference'], "total_amount_with_fee" => $data['total_amount_with_fee'], "delivery_fees" => $data['delivery_fees'], "payment" => $data['payment'], "order_type" =>$data['order_type'], "delivery_address" => $data['delivery_address'], "status" => "Order Placed",'discounted_amount'=>isset($data['discounted_amount'])?$data['discounted_amount']:0,
            'is_pos' => isset($data['is_pos'])?$data['is_pos']:0,
            'table_id'=>isset($data['table_id'])?$data['table_id']:null]);

        if($placed) {
            foreach ($data['order_details'] as $detail) {

                if(isset($detail['extras'])) {
                    $detail['extras'] = json_encode($detail['extras']);
                }

                $detail['order_id'] = $placed['id'];
                OrderDetail::create($detail);
            }

            $placed['phone_number'] =$userData->phone_number;
            $placed['email'] =$userData->email;
            $placed['name'] =$userData->name;
        }


        return $placed;
    }

    public function getTotalSales($data) {

        $totalSale = $this->model->where('status', 'delivered')->sum('total_amount_with_fee');
        return $totalSale;
    }
}
