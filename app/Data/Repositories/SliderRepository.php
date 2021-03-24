<?php

namespace App\Data\Repositories;

use App\Data\Models\Slider;
use Illuminate\Database\Eloquent\Model;
use function App\Helpers\paginator;

class SliderRepository
{
    protected $model;

    public function __construct(Slider $model) {
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



        if(isset($input['gallery_id'])){
            $model = $model->where('gallery_id',$input['gallery_id']);
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
}
