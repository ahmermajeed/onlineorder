<?php

namespace App\Data\Repositories;

use App\Data\Models\GeneralSettings;
use function App\Helpers\paginator;

class GeneralSettingRepository
{
    protected $model;

    public function __construct(GeneralSettings $model) {
        $this->model = $model;
    }

    /**
     * @param $request
     * @param $id
     * @return mixed
     */
    public function updateRecord($request)
    {
        $data = $this->model->findOrFail(1);
        $data->fill($request)->save();
        return $data;
    }
}
