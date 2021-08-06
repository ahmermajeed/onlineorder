<?php

namespace App\Http\Controllers;


use App\Data\Models\UserRole;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    public function register(Request $request)
    {
        $requestData = $request->all();

        $validator = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string'],
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        $userId = User::insertGetId([
            'name' => $requestData['name'],
            'email' => $requestData['email'],
            'password' => Hash::make($requestData['password']),
        ]);
        $user = User::find($userId);
        $user->access_token = $user->createToken('myApp')->accessToken;

        $output = ['access_token' => $user->access_token, 'data' => $user, 'message' => 'Success'];


        return response()->json($output, Response::HTTP_OK);
    }

    public function createNewUser(Request $request)
    {
        $requestData = $request->all();

        $validator = Validator::make($request->all(),[
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string'],
            'id_role' => ['required'],
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        $userId = User::insertGetId([
            'name' => $requestData['name'],
            'email' => $requestData['email'],
            'password' => Hash::make($requestData['password']),
        ]);

        if($userId) {
            UserRole::insertGetId([
                'user_id' => $userId,
                'role_id' => $requestData['id_role']
            ]);

        }

        $user = User::find($userId);

        $output = ['data' => $user, 'message' => 'Success'];

        return response()->json($output, Response::HTTP_OK);
    }

    public function updateUser(Request $request, $id)
    {
        $requestData = $request->all();

        $validator = Validator::make($request->all(),[
            'name' => ['required', 'string', 'max:255'],
            'password' => ['required', 'string'],
            'id_role' => ['required'],
        ]);

        if ($validator->fails()) {
            $code = 401;
            $output = ['error' => ['code' => $code, 'message' => $validator->errors()->first()]];
            return response()->json($output, $code);
        }

        $userId = User::update([
            'name' => $requestData['name'],
            'password' => Hash::make($requestData['password']),
        ])->where('id', $id);

        if($userId) {
            UserRole::where('user_id', $id)
                ->update(['role_id' => $requestData['id_role']]);
            }

        $user = User::find($userId);

        $output = ['data' => $user, 'message' => 'Success'];

        return response()->json($output, Response::HTTP_OK);
    }

    public function deleteUser($id)
    {
        $userId = User::where('id', $id)->delete();

        if($userId) {
            $userId = UserRole::where('user_id', $id)->delete();
        }

        $output = ['data' => [], 'message' => 'Success'];

        return response()->json($output, Response::HTTP_OK);
    }


}
