<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\Products;
use App\Data\Repositories\CategoryRepository;
use App\Data\Repositories\GalleryRepository;
use App\Data\Repositories\OfferRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class OfferController extends Controller
{
    protected $_repository;
    const PER_PAGE = 10;

    public function __construct(OfferRepository $repository)
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
            'message' => "Categories Retrieved Successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }
}
