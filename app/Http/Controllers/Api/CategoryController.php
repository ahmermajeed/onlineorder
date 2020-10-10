<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\Category;
use App\Data\Models\Products;
use App\Data\Repositories\CategoryRepository;
use App\Data\Repositories\GalleryRepository;
use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryStoreRequest;
use Illuminate\Http\Request;
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
            $d['products'] = Products::where('id_category', $d['id'])->get();
        }

        $output = [
            'data' => $data['data'],
            'pagination' => !empty($data['pagination']) ? $data['pagination'] : false,
            'message' => "Categories Retrieved Successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }

    /**
     * Store new resource
     *
     * @param CategoryStoreRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CategoryStoreRequest $request ) {

        $requestData = $request->all();

        $category = new Category();
        $category->fill($requestData);
        $category->save();

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $category->id
            ]
        ]);
    }

    /**
     * Store new resource
     *
     * @param CategoryDestroyRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id) {

        $category = Category::find($id);

        $products = $category->products();

        foreach($products->get() as $product) {
            $product->productGroups()->delete();
            $product->productSizes()->delete();
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
