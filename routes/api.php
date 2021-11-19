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



Route::post('create-user', 'UserController@createNewUser');

Route::put('update-user/{id}', 'UserController@updateUser');

Route::put('delete-user/{id}', 'UserController@deleteUser');

Route::get('get-all-users', 'UserController@getAll');

Route::get('get-all-roles', 'Api\RolesController@index');



Route::post('reservation', 'Api\TableReservationController@customerReservation');
Route::get('restuarant_time', 'Api\TableReservationController@getDayTime');
Route::get('no_of_persons', 'Api\TableReservationController@getNoOfPerson');



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

/** Products Routes */
Route::resource('products', 'Api\ProductController');

/** Choices Groups Routes */
Route::resource('choices-group', 'Api\ChoicesGroupController');

/** Choices Routes */
Route::resource('choices', 'Api\ChoicesController');

Route::post('add-group-to-product', 'Api\ProductController@addGroupToProduct');

Route::post('remove-group-to-product', 'Api\ProductController@removeGroupFromProduct');

/** Stories Routes */
Route::resource('our-story', 'Api\OurStoryController');

/** Restaurant Information */
Route::get('restaurant_info', 'Api\RestaurantController@getRestaurantInfo');

Route::post('update-restaurant-info', 'Api\RestaurantController@updateRestaurantInfo');

/** Products Routes */
Route::resource('deals', 'Api\DealController');

/** Place Order */
Route::post('placeOrder', 'Api\OrderController@placeOrder');

/** Stripe Order */
Route::post('stripe-order', 'Api\OrderController@stripePayment');

/** Stripe Order */
Route::post('card-stream-order', 'Api\OrderController@cardStreamPayment');

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

Route::get('get-time-slots/{duration}','Api\DeliveryChargesController@getTimeSlots');
Route::post('register', 'UserController@register');

Route::resource('tableReservation', 'Api\TableReservationController');

Route::resource('tableCategories', 'Api\TableCategoryController');

/** Printer Routes */
Route::resource('printers', 'Api\PrintersController');

/** Get All Orders */
Route::get('getOrderDetails/{id}', 'Api\OrderController@getOrderDetails');

Route::get('getKitchenOrders', 'Api\OrderController@getKitchenOrders');

Route::resource('feedback', 'Api\FeedbackController');

/** Reports APIs */

Route::post('get-orders','Api\ReportingController@getOrders');
Route::post('get-sale-by-category','Api\ReportingController@getSalesByCategory');
Route::post('get-sale-by-products','Api\ReportingController@getSalesByProducts');


Route::post('update-product-status', 'Api\OrderController@updateProductStatus');

Route::post('add-table', 'Api\tableReservation@store');
