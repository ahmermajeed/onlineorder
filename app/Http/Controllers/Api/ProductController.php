<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\ProductGroups;
use App\Data\Models\Products;
use App\Data\Models\ProductSizes;
use App\Data\Repositories\ProductRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Symfony\Component\HttpFoundation\Response;

class ProductController extends Controller
{
    protected $_repository;
    const PER_PAGE = 10;

    public function __construct(ProductRepository $repository)
    {
        $this->_repository = $repository;
    }

    public function index(Request $request)
    {
        $requestData = $request->all();
        $pagination = !empty($requestData['pagination']) ? $requestData['pagination'] : false;
        $per_page = self::PER_PAGE;
        $data = $this->_repository->findByAll($pagination,$per_page,$requestData);
        $output = [
            'data' => $data['data'],
            'pagination' => !empty($data['pagination']) ? $data['pagination'] : false,
            'message' => "Categories Retrieved Successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }

    public function store(Request $request ) {

        $requestData = $request->all();

        $validator =  Validator::make($requestData, [
            'name' => 'required',
            'description' => 'required',
            'id_category' => 'required',
            'price' => 'required',
            'inputs.*.size' => 'required',
            'inputs.*.price' => 'required'
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        $product = new Products();
        $product->fill($request->all());
        $product->save();

        if($product->id) {
            if (count($requestData['inputs']) > 0) {
                foreach ($requestData['inputs'] as $input) {
                    ProductSizes::create([
                        'id_product' => $product->id,
                        'size' => $input['size'],
                        'price' => $input['price'],
                        'dine_in' =>isset($input['dine_in'])?$input['dine_in']:null,
                        'collection' =>isset($input['collection'])?$input['collection']:null,
                        'delivery' =>isset($input['dine_in'])?$input['delivery']:null,
                    ]);
                }
            }
        }

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $product->id
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $requestData = $request->all();
        $requestData['id'] = $id;

        $validator =  Validator::make($requestData, [
            'id' => 'required|exists:products,id',
            'price' => 'required'
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        $data = $this->_repository->updateRecord($requestData, $id);

        $output = ['data' => $data, 'message' => "Your product has been updated successfully "];
        return response()->json($output, Response::HTTP_OK);
    }

    public function show(Request $request, $id)
    {
        $requestData = $request->all();
        $data = $this->_repository->findById($id, $requestData)->toArray();
        if (isset($requestData['price_type']) && !empty($requestData['price_type'])) {
            $sizeCount = count($data['sizes']);
            $groupCount = count($data['groups']);
            if ($groupCount > 0) {
                if (isset($data['groups'])) {
                    foreach ($data['groups'] as $pkey => $groups) {
                        foreach ($groups['choices'] as $key => $choice) {
                            if (count($data['groups'][$pkey]['choices']) > 0) {
                                $data['groups'][$pkey]['choices'][$key]['price'] = $choice[$requestData['price_type']];
                            }
                        }
                    }

                }
            }

            if ($sizeCount > 0) {
                foreach ($data['sizes'] as $sKey => $p_size) {
                    $data['sizes'][$sKey]['price'] = $p_size[$requestData['price_type']];
                }
            }

        }
        $output = ['data' => $data, 'message' => __("messages.success")];
        return response()->json($output, Response::HTTP_OK);
    }

    public function downloadAllergy(Request $request)
    {
        $file = url('files/allergy_info.pdf');

        $output = ['data' => $file, 'message' =>  "Success"];
        return response()->json($output, Response::HTTP_OK);
    }

    public function downloadMenu(Request $request)
    {
        $file = url('files/our_menu.pdf');

        $output = ['data' => $file, 'message' =>  "Success"];
        return response()->json($output, Response::HTTP_OK);
    }

    /**
     * Delete resource
     *
     * @param Product Destroy $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id) {

        $product = Products::find($id);

        if($product) {
            $product->groups()->delete();
            $product->sizes()->delete();

            $product->delete();
        }

        return response()->json([
            'status' => true,
            'deleted' => true,
            'data' => []
        ]);
    }

    public function addGroupToProduct(Request $request) {

        $requestData = $request->all();

        $validator =  Validator::make($requestData, [
            'id_group' => 'required',
            'id_product' => 'required',
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        $product = new ProductGroups();
        $product->fill($request->all());
        $product->save();

        return response()->json([
            'status' => true,
            'deleted' => true,
            'data' => $product
        ]);
    }

    public function removeGroupFromProduct(Request $request) {

        $requestData = $request->all();

        $validator =  Validator::make($requestData, [
            'id_group' => 'required',
            'id_product' => 'required',
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        ProductGroups::where(['id_product' => $requestData['id_product'], 'id_group' => $requestData['id_group']])->delete();

        return response()->json([
            'status' => true,
            'deleted' => true
        ]);
    }

}
