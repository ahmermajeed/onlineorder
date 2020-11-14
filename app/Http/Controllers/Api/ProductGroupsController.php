<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\ChoicesGroup;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductGroupsStoreRequest;
use App\Data\Models\ProductGroups;

class ProductGroupsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Store new resource
     *
     * @param ProductGroupsStoreRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(ProductGroupsStoreRequest $request ) {
        $productGroup = new ProductGroups();
        $productGroup->fill($request->all());
        $productGroup->save();

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $productGroup->id
            ]
        ]);
    }

    /**
     * Store new resource
     *
     * @param ProductGroupsStoreRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function removeProductGroups(ProductGroupsStoreRequest $request ) {

        $requestData = $request->all();

        ProductGroups::where(['id_product' => $requestData['id_product'], 'id_group' => $requestData['id_group']])->delete();

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => []
        ]);
    }
}
