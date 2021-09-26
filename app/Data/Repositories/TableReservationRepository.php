<?php

namespace App\Data\Repositories;

use App\Data\Models\Category;
use App\Data\Models\TableReservation;
use App\Data\Models\CustomerReservation;
use Carbon\Carbon;

class TableReservationRepository
{
    protected $model;

    public function __construct(TableReservation $model)
    {
        $this->model = $model;
    }

    /**
     * @param bool $pagination
     * @param int $perPage
     * @param array $input
     * @return array|mixed
     */
    public function findByAll($pagination = false, $perPage = 10, $input = [])
    {

        $data = array();
        $model = $this->model;

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

    /**
     * @param $request
     * @param $id
     * @return mixed
     */
    public function addNewRecord($request)
    {
        $data = $this->model->create($request);
        return $data;
    }

    /**
     * Customer Reservation
     */
    Public function makeCustomerReservation($params = []) 
    {
        $params['booking_date'] = Carbon::parse($params['booking_date']);
        $params['booking_time'] = Carbon::parse($params['booking_time']);
        
        $isCustomerExists = CustomerReservation::where('email', $params['email'])->first();

        if (!empty($isCustomerExists) ) {
            ##Todo : Create Customer Password
        }
        $customer = CustomerReservation::create($params);

        return $customer; 
    }
}
