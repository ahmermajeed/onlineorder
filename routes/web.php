<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');

Route::get('/paypal/checkout/{order}/cancelled','Api/PayPalController@cancelled')->name('paypal.checkout.cancelled');
Route::get('/paypal/checkout/{order}/completed','Api/PayPalController@completed')->name('paypal.checkout.completed');
Route::post('/webhook/paypal/{order?}/{env?}','Api/PayPalController@webhook')->name('webhook.paypal.ipn');

Route::post('stream-check-out&acs=1', 'Api\OrderController@cardStreamCallback');


