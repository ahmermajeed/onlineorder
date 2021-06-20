<?php

namespace App\Data\Repositories;

use App\Data\Models\PrinterCategories;
use App\Data\Models\Printers;

class PrinterRepository
{
    protected $model;

    public function __construct(Printers $model)
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

    public function updateRecord($request, $id)
    {
        $data = $this->model->findOrFail($id);
        $data->fill($request)->save();

        if (count($request['categories']) > 0) {

            PrinterCategories::where('id_printer', $id)->delete();

            foreach ($request['categories'] as $input) {
                PrinterCategories::create(['id_printer' => $id, 'id_category' => $input]);
            }
        }

        return $data;
    }
}
