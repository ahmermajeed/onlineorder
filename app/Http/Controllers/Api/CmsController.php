<?php

namespace App\Http\Controllers\Api;

use App\Data\Repositories\CmsRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CmsController extends Controller
{
    protected $_repository;
    const PER_PAGE = 10;

    public function __construct(CmsRepository $repository)
    {
        $this->_repository = $repository;
    }

    public function getCMSPage($slug)
    {
        $data = $this->_repository->findByAll($slug);
        $output = [
            'data' => $data,
            'message' => "Page retreived successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }
}
