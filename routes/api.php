<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\EmailController;
use App\Http\Controllers\api\ReservationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/send-email', [EmailController::class, 'sendEmail']);

Route::post('/send-email-client', [EmailController::class, 'sendEmailClient']);

Route::prefix('reservation')->group(function () {
    Route::get('/',[ ReservationController::class, 'getAll']);
    Route::post('/',[ ReservationController::class, 'create']);
    Route::get('/{id}',[ ReservationController::class, 'get']);
    Route::put('/{id}',[ ReservationController::class, 'update']);
    Route::delete('/{id}',[ ReservationController::class, 'delete']);
});