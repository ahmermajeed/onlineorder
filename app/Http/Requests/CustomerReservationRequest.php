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
            "phone"        => ['required', 'regex:/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/'],
            "email"        => 'required|email',
            "booking_date" => 'required|after_or_equal:'.date('Y-m-d'),
            "persons"      => 'required|integer',
            "booking_time" => 'required',
        ];

        return $rules;
    }
}
