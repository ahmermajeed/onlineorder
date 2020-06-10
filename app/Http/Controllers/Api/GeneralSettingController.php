<?php

namespace App\Http\Controllers\Api;

use App\Data\Repositories\GeneralSettingRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class GeneralSettingController extends Controller
{
    protected $_repository;
    const PER_PAGE = 10;

    public function __construct(GeneralSettingRepository $repository)
    {
        $this->_repository = $repository;
    }

    public function updateGeneralSettings(Request $request)
    {
        $requestData = $request->all();

        $data = $this->_repository->updateRecord($requestData);

        $output = ['data' => $data, 'message' => "your settings has been updated successfully"];
        return response()->json($output, Response::HTTP_OK);
    }
}
