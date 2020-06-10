<?php

namespace App\Http\Controllers\Api;

use App\Data\Repositories\GalleryRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class GalleryController extends Controller
{
    protected $_repository;
    const PER_PAGE = 10;

    public function __construct(GalleryRepository $repository)
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
            'message' => "Gallery Retrieved Successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }
}
