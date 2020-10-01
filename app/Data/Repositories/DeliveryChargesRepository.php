<?php

namespace App\Data\Repositories;

use App\Data\Models\DeliveryChargesDetails;

class DeliveryChargesRepository
{
    protected $model;

    public function __construct(DeliveryChargesDetails $model)
    {
        $this->model = $model;
    }

    public function checkPostalCode($input = [])
    {
        $string = substr($input['postal_code'], 0, 2);  // returns "cde"
        $data = $this->model->where('postal_code', 'LIKE', '%'.$string.'%')->first();
        if ($data) {
            return $data;
        } else { return false; }
    }

}
