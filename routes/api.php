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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

////for test only
Route::get('/verified-only', function(Request $request){
    dd('your are verified', $request->user()->name);
})->middleware('auth:sanctum','verified'); //<=== multiple middleware

// authentication
Route::post('/login', 'ApiAuth\LoginController@login');
Route::post('/register', 'ApiAuth\RegisterController@register');
Route::get('/logout', 'ApiAuth\LoginController@logout');
Route::post('/password/email', 'ApiAuth\ForgotPasswordController@sendResetLinkEmail');
Route::post('/password/reset', 'ApiAuth\ResetPasswordController@reset');
// Route::get('/email/resend', 'ApiAuth\VerificationController@resend')->name('verification.resend');
Route::post('/email/resend', 'ApiAuth\VerificationController@resend')->name('verification.resend');
Route::get('/email/verify/{id}/{hash}', 'ApiAuth\VerificationController@verify')->name('verification.verify');
Route::post('/password/confirm', 'ApiAuth\ConfirmPasswordController@confirm');

//Task Routes
Route::post('/add-task', 'TaskController@addTask')->middleware('auth:sanctum','verified');
Route::get('/get-task', 'TaskController@getTask')->middleware('auth:sanctum','verified');

//Profile
Route::post('/modify-profile', 'ProfileController@modify')->middleware('password.confirm');

//Home Route
Route::get('/home/index', 'HomeController@index');