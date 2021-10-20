<?php

namespace App\Http\Controllers\Api;


use App\Data\Repositories\FeedbackRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Symfony\Component\HttpFoundation\Response;
class FeedbackController extends Controller
{
    protected $_repository;

    public function __construct(FeedbackRepository $repository)
    {
        $this->_repository = $repository;
    }

    public function store(Request $request ) {

        $requestData = $request->all();

        $validator = Validator::make($requestData, [
            'name' => 'required',
            'email' => 'required',
            'rating' => 'required',
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
            'data' => $data,
            'message' => 'Thanks For your Feed back'
        ]);
    }

}
