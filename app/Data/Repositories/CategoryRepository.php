<?php

namespace App\Data\Repositories;

use App\Data\Models\Category;

class CategoryRepository
{
    protected $model;

    public function __construct(Category $model)
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

        if (isset($input['id']) && !empty($input['id'])) {
            $model = $model->where('id', $input['id']);
        }
        if ($pagination) {
            $model = $model->paginate($perPage);
            $data['data'] = $model->items();
            $data = paginator($data, $model);
        } else {
            $data['data'] = $model->get();
        }

        return $data;
    }

    /**
     * @param $request
     * @param $id
     * @return mixed
     */
    public function updateRecord($request, $id)
    {
        $data = $this->model->findOrFail($id);
        $data->fill($request)->save();
        return $data;
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
