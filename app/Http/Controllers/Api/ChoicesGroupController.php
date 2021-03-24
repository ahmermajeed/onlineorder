<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\ChoicesGroup;
use App\Data\Models\ProductGroups;
use App\Data\Repositories\CategoryRepository;
use App\Data\Repositories\ChoicesGroupRepository;
use App\Data\Repositories\GalleryRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
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

    public function store(Request $request) {

        $requestData = $request->all();

        $validator =  Validator::make($requestData, [
            'name' => 'required',
            'type' => 'required',
            'display_type' => 'required'
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

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

    public function update(Request $request, $id)
    {
        $requestData = $request->all();
        $requestData['id'] = $id;

        $validator =  Validator::make($requestData, [
            'id' => 'required|exists:choices_group,id'
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

    public function destroy($id) {

        $groups = ChoicesGroup::find($id);

        if($groups) {
            $groups->choices()->delete();

            ProductGroups::where('id_group', $id)->delete();

            $groups->delete();
        }

        return response()->json([
            'status' => true,
            'deleted' => true,
            'data' => []
        ]);
    }

}
