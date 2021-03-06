<?php

namespace App\Http\Controllers\Api;

use App\Data\Repositories\RestaurantRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RestaurantController extends Controller
{
    protected $_repository;

    public function __construct(RestaurantRepository $repository)
    {
        $this->_repository = $repository;
    }

    public function getRestaurantInfo(Request $request)
    {
        $data = $this->_repository->findByAll();
        $output = [
            'data' => $data,
            'message' => "Restaurant Information Retrieved Successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }
}
