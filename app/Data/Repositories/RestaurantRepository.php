<?php

namespace App\Data\Repositories;

use App\Data\Models\Gallery;
use App\Data\Models\Restaurant;
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
        return $data;
    }
}
