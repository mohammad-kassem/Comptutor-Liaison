<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\General\JWTController;


Route::group(['prefix' => 'v1'], function(){
    Route::post('/register', [JWTController::class, 'register']);
});
