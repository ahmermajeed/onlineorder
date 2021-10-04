<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\RestaurantTiming;
use App\Data\Models\RestaurantTimingSpecific;
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

        $show_asap = 0;

        $available_days = RestaurantTiming::where('shop_close', 1)->get(); // 1 matlb shop khuli ha

        foreach ($available_days as $days) {

            $dayDate = new Carbon('next ' . $days['day']);
            $today = new Carbon('today');

            $todayDay = $today->format('l');

            $getSpecificDate = $dayDate->format('Y-m-d');

            if($todayDay == $days['day']) {
                $getSpecificDate = $today->format('Y-m-d');
            }

            $specific = RestaurantTimingSpecific::where('specific_date', $getSpecificDate)->first();

            if($specific) {

                $days['start_time'] = $specific['start_time'];
                $days['end_time'] = $specific['end_time'];

            }

            $time = array();// Define output

            if($todayDay == $days['day']) {

                $current_timestamp = Carbon::now()->timestamp;
                $current_date_time = Carbon::now()->format('H:30:00');

                $StartTime = strtotime($days['start_time']); //Get Timestamp

                if($current_timestamp >= $StartTime) {

                    $current_date_time = Carbon::parse($current_date_time)->addMinutes(30)->format("H:i:s");

                    $StartTime = strtotime($current_date_time);
                    $EndTime = strtotime($days['end_time']); //Get Timestamp
                } else {
                    $StartTime = strtotime($days['start_time']); //Get Timestamp
                    $EndTime = strtotime($days['end_time']); //Get Timestamp
                }

            } else {
                $StartTime = strtotime($days['start_time']); //Get Timestamp
                $EndTime = strtotime($days['end_time']); //Get Timestamp
            }

            $AddMins = $duration * 60;

            while ($StartTime <= $EndTime) //Run loop
            {
                if ($todayDay == $days['day']) {
                    $show_asap = 1;
                }

                $time[] = $days['day']. " ".$getSpecificDate." at ". date("G:i", $StartTime);
                $StartTime += $AddMins;  // Endtime check
            }

            array_push($returnArray, $time);

        }

        if($show_asap == 1) {
            array_push($returnArray, "As soon as possible");
        }

        asort($returnArray);

        $final_array = $this->_repository->array_flatten($returnArray);

        return $final_array;
    }

}
