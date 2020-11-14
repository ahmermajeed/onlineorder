<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'Auth\LoginController@login');
});

/** Slider Routes */
Route::resource('slider', 'Api\SliderController');


/** Gallery Routes */
Route::resource('gallery', 'Api\GalleryController');

/** Delivery Check Postal Code Routes */
Route::post('check-postal', 'Api\DeliveryChargesController@checkPostalCode');

/** Categories Routes */
Route::resource('categories', 'Api\CategoryController');

/** Stories Routes */
Route::resource('our-story', 'Api\OurStoryController');

/** Restaurant Information */
Route::get('restaurant_info', 'Api\RestaurantController@getRestaurantInfo');

/** Choices Groups Routes */
Route::resource('choices-group', 'Api\ChoicesGroupController');

/** Choices Groups Routes */
Route::post('add-choice', 'Api\ChoicesGroupController@addChoicesToGroup');

/** Products Routes */
Route::resource('products', 'Api\ProductController');

Route::post('add-product-choice', 'Api\ProductGroupsController@store');

/** Products Routes */
Route::resource('deals', 'Api\DealController');

/** Place Order */
Route::post('placeOrder', 'Api\OrderController@placeOrder');

Route::post('get-total-sales', 'Api\OrderController@getTotalSales');

/** CMS Pages */
Route::get('cms/{slug}', 'Api\CmsController@getCMSPage');

/** Get All Orders */
Route::get('getAllOrders', 'Api\OrderController@getAllOrders');

/** Update Order Status */
Route::put('update-order/{id}', 'Api\OrderController@updateOrderStatus');

/** Update General Settings */
Route::post('update-general-setting', 'Api\GeneralSettingController@updateGeneralSettings');

Route::get('downloadAllergy', 'Api\ProductController@downloadAllergy');

Route::get('downloadMenu', 'Api\ProductController@downloadMenu');

/** Get Offers*/
Route::resource('offer', 'Api\OfferController');



Route::post('add-choice', 'Api\ChoicesGroupController@addChoice');
