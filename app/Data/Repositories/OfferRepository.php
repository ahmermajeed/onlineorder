<?php

namespace App\Data\Repositories;

use App\Data\Models\Category;
use App\Data\Models\Offer;

class OfferRepository
{
    protected $model;

    public function __construct(Offer $model)
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
        $model = $this->model->where('status', 1);
        $data['data'] = $model->first();
        return $data;
    }
}
