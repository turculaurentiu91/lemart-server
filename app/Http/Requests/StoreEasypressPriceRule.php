<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEasypressPriceRule extends FormRequest
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
            'from' => 'required|integer|min:1',
            'to' => 'required|integer|min:2',
            'price_one' => 'required|numeric|min:0.01',
            'price_two' => 'required|numeric|min:0.01',
            'price_plus' => 'required|numeric|min:0.01',
        ];
    }

    public function attributes()
    {
        return [
            'from' => 'Partendo da',
            'to' => 'A',
            'price_one' => 'Prezzo Easypress',
            'price_two' => 'Prezzo Easypress 2',
            'price_plus' => 'Prezzp Easypress+',
        ];
    }
}
