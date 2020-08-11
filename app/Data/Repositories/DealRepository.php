<?php

namespace App\Data\Repositories;

use App\Data\Models\Category;
use App\Data\Models\Deal;
use App\Data\Models\DealProducts;
use App\Data\Models\Products;
use function App\Helpers\paginator;

class DealRepository
{
    protected $model;

    public function __construct(Deal $model) {
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
        $deals = $this->model->get();

        foreach ($deals as $key => $deal) {
            $deals[$key]['type'] = "deal";
        }

        return $deals;
    }

    /**
     * @param $id
     * @return array|null
     */
    public function findById($id)
    {
        $data = $this->model->find($id)->toArray();

        $data['items'] = array();

        $dealProducts = DealProducts::where('id_deal', $id)->get();


        if(count($dealProducts) > 0) {
            foreach ($dealProducts as $key => $dealProduct) {

                if($dealProduct['is_category'] == 1) {

                    $exp = explode('_', $dealProduct['item_id']);
                    $category = Category::where('id', $exp[1])->with(['products' => function ($query) {
                        $query->with('groups');
                    }])->first();
                    $data['items'][$key] = $category;
                    $data['items'][$key]['item_type'] = "category";
                    $data['items'][$key]['quantity'] = $dealProduct['quantity'];
                    $data['items'][$key]['is_options'] = $dealProduct['is_options'];

                } else {

                    $exp = explode('_', $dealProduct['item_id']);
                    $product = Products::where('id', $exp[1])->with('groups')->first();

                    $data['items'][$key] = $product;
                    $data['items'][$key]['item_type'] = "product";
                    $data['items'][$key]['quantity'] = $dealProduct['quantity'];
                    $data['items'][$key]['is_options'] = $dealProduct['is_options'];
                }

            }
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
