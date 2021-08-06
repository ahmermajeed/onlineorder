<?php

namespace App\Http\Controllers\Api;

use App\Data\Repositories\TableCategoryRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Symfony\Component\HttpFoundation\Response;

class TableCategoryController extends Controller
{
    protected $_repository;
    const PER_PAGE = 10;

    public function __construct(TableCategoryRepository $repository)
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
            'message' => "Tables Categories Retrieved Successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }

    public function store(Request $request ) {

        $requestData = $request->all();

        $validator = Validator::make($requestData, [
            'name' => 'required',
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
            'id' => 'required|exists:table_category,id'
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        $data = $this->_repository->updateRecord($requestData, $id);

        $output = ['data' => $data, 'message' => "Your reservation has been updated successfully "];
        return response()->json($output, Response::HTTP_OK);
    }

    public function destroy($id) {

    }
}
