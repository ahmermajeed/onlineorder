<?php

namespace App\Data\Repositories;

use App\Data\Models\Products;
use function App\Helpers\paginator;
class ProductRepository
{
    protected $model;

    public function __construct(Products $model) {
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

        if (isset($input['category_id']) && !empty($input['category_id'])) {
            $model = $model->where('id_category', $input['category_id']);
        }

        if ($pagination) {
            $model = $model->paginate($perPage);
            $data['data'] = $model->with('groups')->items();
            $data = paginator($data, $model);
        } else {
            $data['data'] = $model->with('groups')->get();
        }

        return $data;
    }

    /**
     * @param $id
     * @return array|null
     */
    public function findById($id)
    {
        $data = array();
        $query = $this->model->with('groups')->find($id);

        if ($query != NULL) {
            $data = $query;
        } else {
            $data = null;
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
}
