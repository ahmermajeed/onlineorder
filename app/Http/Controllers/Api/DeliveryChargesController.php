<?php

namespace App\Http\Controllers\Api;

use App\Data\Repositories\DeliveryChargesRepository;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Validator;
use Symfony\Component\HttpFoundation\Response;

class DeliveryChargesController extends Controller
{
    protected $_repository;

    public function __construct(DeliveryChargesRepository $repository)
    {
        $this->_repository = $repository;
    }

    public function checkPostalCode(Request $request)
    {
        $requestData = $request->all();

        $validator =  Validator::make($requestData, [
            'order_type' => 'required'
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        if($requestData['order_type'] == "Delivery")
            $data = $this->_repository->checkPostalCode($requestData);
        else
            $data = true;

        if($data) {

            $output = [
                'data' => $data,
                'message' => "Delivery Details Retrieved Successfully",
            ];

            return response()->json($output, Response::HTTP_OK);

        } else {

            $code = 200;
            $output = ['error' => ['code' => 401, 'message' => "No record found"]];
            return response()->json($output, $code);
        }
    }

    function getTimeSlots($duration)
    {
        $returnArray = array();

        for ($j = 0; $j <= 2; $j++) {

            $currentDateTime = Carbon::now();
            $currentDateTime->addDay($j);
            $day = $currentDateTime->format('l');

            $time = array();// Define output
            $StartTime = strtotime("12:30"); //Get Timestamp
            $EndTime = strtotime("23:55"); //Get Timestamp

            $AddMins = $duration * 60;

            while ($StartTime <= $EndTime) //Run loop
            {
                $time[] = $day. " ". date("G:i", $StartTime);
                $StartTime += $AddMins; //Endtime check
            }

            array_push($returnArray, $time);
        }

        $final_array = $this->_repository->array_flatten($returnArray);

        return $final_array;
    }

}
