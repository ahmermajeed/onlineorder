<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\Category;
use App\Data\Models\Products;
use App\Data\Repositories\CategoryRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Symfony\Component\HttpFoundation\Response;

class CategoryController extends Controller
{
    protected $_repository;
    const PER_PAGE = 10;

    public function __construct(CategoryRepository $repository)
    {
        $this->_repository = $repository;
    }

    public function index(Request $request)
    {
        $requestData = $request->all();
        $pagination = !empty($requestData['pagination']) ? $requestData['pagination'] : false;
        $per_page = self::PER_PAGE;
        $data = $this->_repository->findByAll($pagination,$per_page,$requestData);
        foreach ($data['data'] as $d) {
            $products  = Products::where('id_category', $d['id']);
            if(isset($requestData['price_type']) && !empty($requestData['price_type'])){
                $products->select('*',$requestData['price_type'].' as price');
                $productsData =$products->get()->toArray();
                foreach ($productsData as $pd => $productData){
                    $sizeCount =  count($productData['sizes']);
                    $groupCount = count($productData['groups']);
                    if ($groupCount > 0) {
                        if (isset($productData['groups'])) {
                            foreach($productData['groups'] as $pkey => $groups )
                            {
                                foreach ($groups['choices'] as $key => $choice){
                                    if( count($productsData[$pd]['groups'][$pkey]['choices']) > 0){
                                        $productsData[$pd]['groups'][$pkey]['choices'][$key]['price'] = $choice[$requestData['price_type']];
                                    }
                                }
                            }

                        }
                    }

                    if($sizeCount > 0){
                        foreach ($productData['sizes'] as $sKey => $p_size){
                            $productsData[$pd]['sizes'][$sKey]['price'] = $p_size[$requestData['price_type']];
                        }
                    }
                }
                $d['products'] =  $productsData;
            }else {
                $d['products'] =  $products->get()->toArray();
            }

        }
        $output = [
            'data' => $data['data'],
            'pagination' => !empty($data['pagination']) ? $data['pagination'] : false,
            'message' => "Categories Retrieved Successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }

    public function store(Request $request ) {

        $requestData = $request->all();

        $validator = Validator::make($requestData, [
            'name' => 'required',
            'description' => 'required'
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        $data = $this->_repository->addNewRecord($requestData);

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => $data
        ]);
    }

    public function update(Request $request, $id)
    {
        $requestData = $request->all();
        $requestData['id'] = $id;

        $validator = Validator::make($requestData, [
            'id' => 'required|exists:categories,id'
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        $data = $this->_repository->updateRecord($requestData, $id);

        $output = ['data' => $data, 'message' => "Your category has been updated successfully "];
        return response()->json($output, Response::HTTP_OK);
    }

    public function destroy($id) {

        $category = Category::find($id);

        $products = $category->products();

        foreach($products->get() as $product) {
            $product->groups()->delete();
            $product->sizes()->delete();
        }

        $products->delete();
        $category->delete();

        return response()->json([
            'status' => true,
            'deleted' => true,
            'data' => []
        ]);
    }
}
