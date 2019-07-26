<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function unreadExpressRequests()
    {
        return $this->belongsToMany('App\ExpressRequest', 'user_express_request');
    }

    public function unreadStandardRequests()
    {
        return $this->belongsToMany('App\StandardRequest', 'user_standard_request');
    }

    public function unreadEasypressRequests()
    {
        return $this->belongsToMany('App\EasypressRequest', 'user_easypress_request');
    }
}
