<?php

namespace App\Data\Repositories;

use App\Data\Models\Cms;
use App\Data\Models\Gallery;
use App\Data\Models\Restaurant;
use function App\Helpers\paginator;

class CmsRepository
{
    protected $model;

    public function __construct(Cms $model) {
        $this->model = $model;
    }

    /**
     * @param bool $pagination
     * @param int $perPage
     * @param array $input
     * @return array|mixed
     */
    public function findByAll($slug)
    {
        $data = $this->model->where('slug', $slug)->first();
        return $data;
    }
}
