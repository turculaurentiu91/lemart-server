<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/express-request')->uses('ExpressRequestController@createAPI');
Route::post('/standard-request')->uses('StandardRequestController@createAPI');
Route::post('/exponent-push-token')->uses('PushController@registerTokenAPI');
Route::post('/standard-push-token')->uses('PushController@registerStandardTokenAPI');
Route::post('/easypress')->uses('EasypressRequestController@storeAPI');
Route::get('/easypress/price')->uses('EasypressRequestController@priceAPI');
