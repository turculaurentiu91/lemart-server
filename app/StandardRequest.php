<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StandardRequest extends Model
{
    public $fillable = [
        'company_name',
        'email',
        'phone',
        'address',
        'request_address',
        'person',
        'description'
    ];

    public function images()
    {
       return $this->hasMany('App\Image');
    }

    public function users()
    {
        return $this->belongsToMany('App\User', 'user_standard_request');
    }
}
