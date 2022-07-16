<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\General\JWTController;
use App\Http\Controllers\General\SubjectController;
use App\Http\Controllers\Tutor\DegreeController;
use App\Http\Controllers\Tutor\TutorController;
use App\Http\Controllers\Tutor\ScheduleController;
use App\Http\Controllers\General\AppointmentController;


Route::group(['prefix' => 'v1'], function(){
    Route::group(['prefix' => 'auth'], function(){
        Route::post('/register', [JWTController::class, 'register']);
        Route::post('/login', [JWTController::class, 'login']);
    });
    Route::group(['prefix' => 'tutor'], function(){
        Route::group(['middleware' => 'student'], function($router) {
            Route::get('/get', [TutorController::class, 'get']);
        });
        Route::group(['middleware' => 'tutor'], function($router) {
            Route::put('/update', [TutorController::class, 'update']);
        });
        Route::group(['prefix' => 'schedule'], function(){
            Route::group(['middleware' => 'tutor'], function($router) {
                Route::get('/get', [ScheduleController::class, 'get']); 
                Route::post('/add', [ScheduleController::class, 'add']);
                Route::delete('/delete/{id?}', [ScheduleController::class, 'delete']);
            });
            Route::group(['middleware' => 'student'], function($router) {
                Route::get('/available/{id?}', [ScheduleController::class, 'getAvailableTimes']);
            });
        }); 
        Route::group(['prefix' => 'degree'], function(){
            Route::group(['middleware' => 'tutor'], function($router) {
                Route::get('/get', [DegreeController::class, 'get']);
                Route::post('/add', [DegreeController::class, 'add']);
                Route::delete('/delete/{id?}', [DegreeController::class, 'delete']);
                Route::put('/update/{id?}', [DegreeController::class, 'update']);
            });
        });
    });
    Route::group(['prefix' => 'subject'], function(){
        Route::group(['middleware' => 'auth'], function($router) {
            Route::get('/user', [SubjectController::class, 'getUserSubjects']); 
            Route::get('/', [SubjectController::class, 'get']); 
            Route::post('/add', [SubjectController::class, 'addUserSubjects']);
            Route::delete('/delete/{id?}', [SubjectController::class, 'delete']);
        });
    });
    Route::group(['prefix' => 'appointment'], function(){
        Route::group(['middleware' => 'student'], function($router) {
            Route::get('/student', [AppointmentController::class, 'getStudentAppointments']);
            Route::post('/add', [AppointmentController::class, 'add']);
        });
        Route::group(['middleware' => 'tutor'], function($router) {
            Route::get('/tutor', [AppointmentController::class, 'getTutorAppointments']);
        });
        Route::group(['middleware' => 'auth'], function($router) {
            Route::delete('/delete/{id?}', [AppointmentController::class, 'delete']);
        }); 
    });
});
