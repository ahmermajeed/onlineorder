<?php

namespace App\Http\Controllers\Auth;

use App\Data\Models\GeneralSettings;
use App\Data\Models\UserDevices;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Validator;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');

        $this->username = $this->findUsername();
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            $this->username() => 'required|string',
            'password' => 'required|string',
            'device_type' => 'required',
            'device_token' => 'required'
        ]);

        if ($validator->fails()) {
            $output = ['error' => ['code' => 401, 'message' => $validator->errors()->first()]];
            return response()->json($output, 401);
        }

        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);
            return $this->sendLockoutResponse($request);
        }

        if ($this->guard()->validate($this->credentials($request))) {
            $user = $this->guard()->getLastAttempted();
            return $this->sendLoginResponse($request);
        }

        return $this->sendFailedLoginResponse($request);
    }

    /**
     * Get the failed login response instance.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function sendFailedLoginResponse(Request $request)
    {
        $output = ['error' => ['code' => 406, 'message' => trans('auth.failed')]];
        return response()->json($output, 406);
    }

    /**
     * Get the login username to be used by the controller.
     *
     * @return string
     */
    public function findUsername()
    {
        return "email";
    }

    /**
     * Get username property.
     *
     * @return string
     */
    public function username()
    {
        return $this->username;
    }

    protected function sendLoginResponse(Request $request)
    {
        $this->clearLoginAttempts($request);

        $data = $this->authenticated($request, $this->guard()->getLastAttempted())
            ?: redirect()->intended($this->redirectPath());

         $user = User::find($data->id);

        $output = ['access_token' => $data->access_token, "is_bluetooth" => 0, 'printer_ip' => $data->printer_ip, 'printer_ip_1' => $data->printer_ip_1, 'printer_ip_2' => $data->printer_ip_2, 'printer_ip_3' => $data->printer_ip_3, 'printer_ip_4' => $data->printer_ip_4, 'printer_ip_5' => $data->printer_ip_5, 'shop_status' => $data->shop_status, 'data' => $user, 'message' => 'Success'];
        // HTTP_OK = 200;
        return response()->json($output, Response::HTTP_OK);
    }

    protected function authenticated(Request $request, $user)
    {
        if($request['device_type'] == 'web'){
            $user->access_token = $user->createToken('myApp')->accessToken;
            return $user;
        }

        if($request['device_token']) {
            $userDevice = UserDevices::where('device_token', $request['device_token'])->first();

            if(!$userDevice) {
                UserDevices::create(["user_id" => $user->id, "device_type" => $request['device_type'], "device_token" => $request['device_token']]);
            }
        }

        $general_settings = GeneralSettings::get();

        $user->printer_ip = $general_settings[0]->printer_ip;
        $user->printer_ip_1 = $general_settings[0]->printer_ip_1;
        $user->printer_ip_2 = $general_settings[0]->printer_ip_2;
        $user->printer_ip_3 = $general_settings[0]->printer_ip_3;
        $user->printer_ip_4 = $general_settings[0]->printer_ip_4;
        $user->printer_ip_5 = $general_settings[0]->printer_ip_5;
        $user->shop_status = $general_settings[0]->shop_status;

        $user->access_token = $user->createToken('myApp')->accessToken;

        return $user;
    }
}
