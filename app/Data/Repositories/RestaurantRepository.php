<?php

namespace App\Data\Repositories;

use App\Data\Models\Gallery;
use App\Data\Models\GeneralSettings;
use App\Data\Models\Restaurant;
use App\Data\Models\RestaurantTiming;
use function App\Helpers\paginator;

class RestaurantRepository
{
    protected $model;

    public function __construct(Restaurant $model) {
        $this->model = $model;
    }

    /**
     * @param bool $pagination
     * @param int $perPage
     * @param array $input
     * @return array|mixed
     */
    public function findByAll()
    {
        $data = $this->model->first();
     //   $data['address']['full_address'] =  'Test';//$data->address->full_address;
        $data['general_setting'] = GeneralSettings::first()->toArray();
        $data['timing'] = RestaurantTiming::all()->toArray();
        return $data;
    }

    /**
     * @param $request
     * @param $id
     * @return mixed
     */
    public function updateRecord($request)
    {
        $data = $this->model->findOrFail(1);
        $data->fill($request)->save();

        if(isset($request['address'])) {
            $data->address->fill($request['address']);
            $data->address->save();
        }

        return $data;
    }
}
