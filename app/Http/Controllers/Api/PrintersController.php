<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\PrinterCategories;
use App\Data\Models\Printers;
use App\Data\Repositories\PrinterRepository;
use App\Http\Controllers\Controller;
use App\Http\Requests\PrinterStoreRequest;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PrintersController extends Controller
{
    protected $_repository;
    const PER_PAGE = 10;

    public function __construct(PrinterRepository $repository)
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
            'message' => "Printers Retrieved Successfully",
        ];
        return response()->json($output, Response::HTTP_OK);
    }

    /**
     * Store new resource
     *
     * @param PrinterStoreRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(PrinterStoreRequest $request) {

        $requestData = $request->all();

        $printer = new Printers();
        $printer->fill($requestData);
        $printer->save();

        if($printer->id) {
            if (count($requestData['categories']) > 0) {
                foreach ($requestData['categories'] as $input) {
                    PrinterCategories::create(['id_printer' => $printer->id, 'id_category' => $input]);
                }
            }
        }

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $printer->id
            ]
        ]);
    }

    /**
     * Store new resource
     *
     * @param PrinterDestroyRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id) {

        $printer = Printers::find($id);

        $categories = $printer->categories();

        $categories->delete();

        $printer->delete();

        return response()->json([
            'status' => true,
            'deleted' => true,
            'data' => []
        ]);
    }

    public function update(Request $request, $id)
    {
        $requestData = $request->all();

        $requestData['id'] = $id;

        $validator =  Validator::make($requestData, [
            'id' => 'required|exists:printers,id',
            'price' => 'required'
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        $data = $this->_repository->updateRecord($requestData, $id);

        $output = ['data' => $data, 'message' => "Your product has been updated successfully "];
        return response()->json($output, Response::HTTP_OK);
    }
}
