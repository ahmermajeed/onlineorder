<?php

namespace App\Http\Controllers\Api;

use App\Data\Repositories\DealRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Symfony\Component\HttpFoundation\Response;

class DealController extends Controller
{
    protected $_repository;
    const PER_PAGE = 10;

    public function __construct(DealRepository $repository)
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
            'data' => $data,
            'pagination' => !empty($data['pagination']) ? $data['pagination'] : false,
            'message' => "Deals Retrieved Successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }

    public function show($id)
    {
        $data = $this->_repository->findById($id);
        $output = ['data' => $data, 'message' => __("messages.success")];
        return response()->json($output, Response::HTTP_OK);
    }

    public function update(Request $request, $id)
    {
        $requestData = $request->all();
        $requestData['id'] = $id;

        $validator =  Validator::make($requestData, [
            'id' => 'required|exists:deals,id',
            'price' => 'required'
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        $data = $this->_repository->updateRecord($requestData, $id);

        $output = ['data' => $data, 'message' => "Your deal has been updated successfully "];
        return response()->json($output, Response::HTTP_OK);
    }
}
