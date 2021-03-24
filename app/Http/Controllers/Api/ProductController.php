<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\Products;
use App\Data\Repositories\CategoryRepository;
use App\Data\Repositories\GalleryRepository;
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

    public function show($id)
    {
        $data = $this->_repository->findById($id);
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
}
