<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerReservationRequest extends BaseAPIRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            "firstname"    => 'required',
            "lastname"     => 'required',
            "phone"        => 'required',
            "email"        => 'required',
            "booking_date" => 'required',
            "persons"      => 'required',
            "booking_time" => 'required',
        ];

        return $rules;
    }
}
