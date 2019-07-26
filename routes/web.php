<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/')->uses('HomeController');

Route::get('login')->name('login')->uses('Auth\LoginController@showLoginForm');
Route::post('login')->name('login.attempt')->uses('Auth\LoginController@login');
Route::post('logout')->name('logout')->uses('Auth\LoginController@logout');

Route::get('/home')->name('home')->uses('HomeController');

Route::get('/users')->name('users')->uses('UserController@index');
Route::get('/users/create')->name('users.create')->uses('UserController@create');
Route::get('/users/edit/{user}')->name('users.edit')->uses('UserController@edit');
Route::post('/users')->name('users.store')->uses('UserController@store');
Route::put('/users/{user}')->name('users.update')->uses('UserController@update');
Route::delete('/users/{id}')->uses('UserController@delete');

Route::get('/express-requests')->name('expressRequests')->uses('ExpressRequestController@index');
Route::get('/express-requests/{expressRequest}')->name('expressRequests.view')->uses('ExpressRequestController@view');
Route::delete('/express-requests/{expressRequest}')->name('expressRequests.delete')->uses('ExpressRequestController@delete');

Route::get('/standard-requests')->name('standardRequests')->uses('StandardRequestController@index');
Route::get('/standard-requests/{standardRequest}')->name('standardRequests.view')->uses('StandardRequestController@view');
Route::delete('/standard-requests/{standardRequest}')->name('standardRequests.delete')->uses('StandardRequestController@delete');

Route::get('/push-notifications/create')->name('PushNotifications.create')->uses('PushController@create');
Route::post('/push-notifications')->name('PushNotifications.send')->uses('PushController@send');

Route::resource('/easypress', 'EasypressRequestController')
    ->parameters(['easypress' => 'easypressRequest']);

Route::resource('easypress-price-rules', 'EasypressPriceRuleController')
    ->parameters(['easypress_price_rule', 'easypressPriceRule']);

Route::get('/easypress/{easypressRequest}/document')->uses('EasypressRequestController@getPDFDocument');
