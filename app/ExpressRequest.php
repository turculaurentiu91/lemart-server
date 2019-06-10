<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ExpressRequest extends Model
{
    protected $fillable = [
        'company_name',
        'email',
        'phone',
        'address',
        'model',
        'weight',
        'total',
        'person',
        'damage',
    ];

    public function images()
    {
        return $this->hasMany('App\Image');
    }
}
