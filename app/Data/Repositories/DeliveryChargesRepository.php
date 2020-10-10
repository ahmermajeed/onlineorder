<?php

namespace App\Data\Repositories;

use App\Data\Models\DeliveryChargesDetails;
use App\Data\Models\DeliveryPostCodesMiles;
use GuzzleHttp\Client;

class DeliveryChargesRepository
{
    protected $model;

    public function __construct(DeliveryChargesDetails $model)
    {
        $this->model = $model;
    }

    public function checkPostalCode($input = [])
    {
        $string = substr($input['postal_code'], 0, 2);  // returns "cde"

        $data = $this->model->where('postal_code', 'LIKE', '%'.$string.'%')->first();
        if ($data) {

            $postCodeDetail = DeliveryPostCodesMiles::where('post_code', $input['postal_code'])->first();

            if(!$postCodeDetail) {

                $client = new Client();
                // Create a request with auth credentials
                $request = $client->get('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=B12 9RG, birmingham&destinations=B8+2nb, birmingham&key=AIzaSyDwX7Hvp5q6fuQ8uwCEYARNwYIgJ-6_3mo');

                // Get the actual response without headers
                $response = $request->getBody();

                print_r($response);
                exit;

                return $response;


            }

            return $data;
        } else { return false; }
    }

    public function sendCurlRequestToPrestaShop($url, $key){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }

}
