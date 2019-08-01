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
        'person',
        'damage',
    ];

    public function images()
    {
        return $this->hasMany('App\Image');
    }

    public function users()
    {
        return $this->belongsToMany('App\User', 'user_express_request');
    }
}
