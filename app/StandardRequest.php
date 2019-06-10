<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StandardRequest extends Model
{
    public $fillable = ['type', 'person', 'description'];

    public function images()
    {
        $this->hasMany('App\Image');
    }
}
