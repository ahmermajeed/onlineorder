<?php

namespace App\Data\Repositories;

use App\Data\Models\Category;
use App\Data\Models\TableReservation;
use App\Data\Models\CustomerReservation;
use App\Data\Models\RestaurantTiming;
use App\Data\Models\Users;
use Carbon\Carbon;
use App\Jobs\SendCustomerCredentialsJob;
use App\Jobs\SendRetainingCustomerJob;

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

        if (empty($isCustomerExists) ) {
            $password = rand();
            $user = [
                'name'         => $params['firstname'].' '.$params['lastname'],
                'email'        => $params['email'],  
                'password'     => bcrypt($password),
                "phone_number" => $params['phone'],
            ];
            Users::create($user);

            SendCustomerCredentialsJob::dispatch($user);
        } else {
            $user = Users::where('email', $params['email'])->first();

            SendRetainingCustomerJob::dispatch($user);
        }
        $customer = CustomerReservation::create($params);

        return $customer; 
    }

    /**
     * Fetch Dates of restaurnts
     */
    public function fetchDayTime() 
    {
        $restuarantTime = RestaurantTiming::get();

        return $restuarantTime;
    }

    // public function fetchNoOfPersons() 
    // {
    //     $persons = RestaurantTiming::get();

    //     return $restuarantTime;
    // }
}
