<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEasypressRequest extends FormRequest
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
            'email' => 'required|email',
            'appartament_count' => 'required|integer|min:1',
            'note' => 'max:250',
        ];
    }

    public function attributes()
    {
        return [
            'appartament_count' => 'Nr. appartamenti'
        ];
    }
}
