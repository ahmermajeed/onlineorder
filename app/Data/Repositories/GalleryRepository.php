<?php

namespace App\Data\Repositories;

use App\Data\Models\Gallery;
use function App\Helpers\paginator;

class GalleryRepository
{
    protected $model;

    public function __construct(Gallery $model) {
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
}
