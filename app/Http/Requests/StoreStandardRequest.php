<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStandardRequest extends FormRequest
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
        return [
            'companyName' => 'required',
            'email' => 'required|email',
            'phone' => 'required|digits:10',
            'address' => 'required',
             'request_address' => 'required',
             'person' => 'required',
             'description' => 'required',
        ];
    }
}
