<?php

namespace App\Data\Repositories;

use App\Data\Models\Choices;
use App\Data\Models\ChoicesGroup;
use function App\Helpers\paginator;

class ChoicesRepository
{
    protected $model;

    public function __construct(Choices $model) {
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

        if (isset($input['id_group']) && !empty($input['id_group'])) {
            $model = $model->where('id_group', $input['id_group']);
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

    public function updateRecord($request, $id)
    {
        $data = $this->model->findOrFail($id);
        $data->fill($request)->save();
        return $data;
    }

}
