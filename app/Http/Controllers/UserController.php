<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{

    public function register(Request $request)
    {

        $validator = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string'],
        ]);

        $requestData = $request->all();

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


}
