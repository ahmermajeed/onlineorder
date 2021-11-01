<?php

namespace App\Data\Repositories;

use App\Data\Models\Feedback;
class FeedbackRepository
{
    protected $model;
    public function __construct(Feedback $model)
    {
        $this->model = $model;
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

}
