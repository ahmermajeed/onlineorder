<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\RestaurantTiming;
use App\Data\Models\RestaurantTimingSpecific;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Validator;

class RestaurantTimingController extends Controller
{


    public function store(Request $request)
    {
        $requestData = $request->all();
        $validator = Validator::make($requestData, [
            "data" => 'required|array',
            "day.*" => 'required',
            'start_time.*' => 'required',
            'end_time.*' => 'required',
            'shop_close.*' => 'required',
        ]);


        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()]];
            return response()->json($output, $code);
        }
        RestaurantTiming::truncate();

        foreach ($requestData['data'] as $data) {
            if ($data['shop_close']) {
                $data['shop_close'] = 0;
            } else {
                $data['shop_close'] = 1;
            }

            RestaurantTiming::create($data);
        }
        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [RestaurantTiming::all()]
        ]);

    }

    public function index(Request $request)
    {
        $output = [
            'data' => RestaurantTiming::all(),
            'message' => "Restaurant Timing Retrieved Successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }


    public function addSpecificDateTime(Request $request) {
        $requestData = $request->all();

        $validator = Validator::make($requestData, [
            "data" => 'required|array',
            'start_time.*' => 'required',
            'end_time.*' => 'required',
            'shop_close.*' => 'required',
            'date.*' => 'required'
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()]];
            return response()->json($output, $code);
        }

        foreach ($requestData['data'] as $data) {
            if ($data['shop_close']) {
                $data['shop_close'] = 0;
            } else {
                $data['shop_close'] = 1;
            }
            RestaurantTimingSpecific::create($data);
        }
        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [RestaurantTimingSpecific::all()]
        ]);
    }

    public function getAllSpecificDateTime(){
        $output = [
            'data' => RestaurantTimingSpecific::all(),
            'message' => "Restaurant Timing Retrieved Successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }

    public function destroy($id) {

        RestaurantTimingSpecific::find($id);
        return response()->json([
            'status' => true,
            'deleted' => true,
            'data' => []
        ]);
    }

}
