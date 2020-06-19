<?php

namespace App\Data\Repositories;

use App\Data\Models\OrderDetail;
use App\Data\Models\Orders;
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

        $placed = $this->model->create(["user_id" => $data['user_id'], "reference" => $data['reference'], "total_amount_with_fee" => $data['total_amount_with_fee'], "delivery_fees" => $data['delivery_fees'], "payment" => $data['payment'], "order_type" => $data['order_type'], "delivery_address" => $data['delivery_address'], "status" => "Order Placed"]);

        if($placed) {
            foreach ($data['order_details'] as $detail) {

                if(isset($detail['extras'])) {
                  $detail['extras'] = json_encode($detail['extras']);
                }

                $detail['order_id'] = $placed['id'];
                OrderDetail::create($detail);
            }
        }

        return $placed;
    }

    public function getTotalSales($data) {

        $totalSale = $this->model->where('status', 'delivered')->sum('total_amount_with_fee');
        return $totalSale;
    }
}
