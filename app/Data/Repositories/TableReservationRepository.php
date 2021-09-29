<?php

namespace App\Data\Repositories;

use App\Data\Models\Category;
use App\Data\Models\TableReservation;
use App\Data\Models\CustomerReservation;
use App\Data\Models\RestaurantTiming;
use App\Data\Models\GeneralSettings;
use App\Data\Models\Users;
use Carbon\Carbon;
use App\Jobs\SendCustomerCredentialsJob;
use App\Jobs\SendRetainingCustomerJob;
use App\Jobs\SendReservationAdminEmailJob;

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
            $user['password']     = $password;
            $user['booking_date'] = $params['booking_date'];
            $user['booking_time'] = $params['booking_time'];
            $user['persons']      = $params['persons'];

            // Send email to customer about reservation with login credentials.
            SendCustomerCredentialsJob::dispatch($user);
        } else {
            $user = Users::where('email', $params['email'])->first();
            
            // Send email to customer about reservation without login credentials.
            SendRetainingCustomerJob::dispatch($user);
        }
        $customer = CustomerReservation::create($params);

        // Send email to admin about customer Reservation.
        SendReservationAdminEmailJob::dispatch($user);

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

    public function fetchNoOfPersons() 
    {
        $persons = 0;
        $generalSettings = GeneralSettings::first();
        
        if (!empty($generalSettings)) {
            $persons = $generalSettings->total_allowed_person;
        }
        
        return $persons;
    }
}
