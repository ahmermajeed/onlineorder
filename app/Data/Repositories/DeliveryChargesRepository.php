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
        $data = $this->model->where('postal_code', $input['postal_code'])->first();

        if ($data) { return $data; } else { return false; }
    }

}
