<?php

namespace App\Data\Repositories;

use App\Data\Models\OurStory;
use function App\Helpers\paginator;

class OurStoryRepository
{
    protected $model;

    public function __construct(OurStory $model) {
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
        $data['data'] = $this->model->first();
        return $data;
    }
}
