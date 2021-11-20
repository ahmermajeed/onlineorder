<?php

namespace App\Data\Repositories;

use App\Data\Models\AssignOrderToDriver;
use App\Data\Models\Category;
use App\Data\Models\Deal;
use App\Data\Models\DealProducts;
use App\Data\Models\Products;
use App\User;
use function App\Helpers\paginator;

class DriverRepository
{
    /**
     * @param bool $pagination
     * @param int $perPage
     * @param array $input
     * @return mixed
     */
    public function findByAll($pagination = false,$perPage = 10, $input = [])
    {
       $drivers = User::whereHas('user_roles', function ($query) {
                return $query->where('role_id', '=', 3);
            })->get();

        return $drivers;
    }


    public function assignOrderToDriver($data){
        AssignOrderToDriver::create([
            'driver_id' => $data['driver_id'],
            'order_id' => $data['order_id'],
        ]);

        return $data;
    }

}
