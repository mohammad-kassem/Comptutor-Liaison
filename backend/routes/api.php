<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\General\JWTController;
use App\Http\Controllers\Tutor\DegreeController;


Route::group(['prefix' => 'v1'], function(){
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::group(['prefix' => 'tutor'], function(){
        Route::group(['prefix' => 'degree'], function(){
            Route::get('/get', [DegreeController::class, 'get']);
            Route::post('/add', [DegreeController::class, 'add']);
            Route::delete('/delete/{id?}', [DegreeController::class, 'delete']);
        });
    });
});
