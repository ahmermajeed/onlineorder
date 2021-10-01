<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\Category;
use App\Data\Models\Products;
use App\Data\Repositories\CategoryRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Cache;
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

        foreach ($data['data'] as $key => $d) {

            if (Cache::has('product-data-' . $d['id'])) {

                $cached = Cache::get('product-data-' . $d['id']);

                $d['products'] = $cached;

            } else {
                $d['products'] = Products::where('id_category', $d['id'])->get()->toArray();

                Cache::put('product-data-' . $d['id'], $d['products']);
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
