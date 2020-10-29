<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\Choices;
use App\Data\Models\ChoicesGroup;
use App\Data\Repositories\CategoryRepository;
use App\Data\Repositories\ChoicesGroupRepository;
use App\Data\Repositories\GalleryRepository;
use App\Http\Controllers\Controller;
use App\Http\Requests\ChoicesGroupStoreRequest;
use App\Http\Requests\ChoicesStoreRequest;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ChoicesGroupController extends Controller
{
    protected $_repository;
    const PER_PAGE = 10;

    public function __construct(ChoicesGroupRepository $repository)
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
            'message' => "Sidelines Retrieved Successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }

    /**
     * Store new resource
     *
     * @param ChoicesGroupStoreRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(ChoicesGroupStoreRequest $request ) {

        $choices = new ChoicesGroup();
        $choices->fill($request->all());
        $choices->save();

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $choices->id
            ]
        ]);
    }

    public function addChoicesToGroup(ChoicesStoreRequest $request ) {

        $product = new Choices();
        $product->fill($request->all());
        $product->save();

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $product->id
            ]
        ]);
    }
}
