<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\General\JWTController;
use App\Http\Controllers\General\SubjectController;
use App\Http\Controllers\Tutor\DegreeController;
use App\Http\Controllers\Tutor\TutorController;
use App\Http\Controllers\Tutor\ScheduleController;


Route::group(['prefix' => 'v1'], function(){
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::group(['prefix' => 'tutor'], function(){
        Route::get('/get/{id?}', [TutorController::class, 'get']);
        Route::group(['prefix' => 'schedule'], function(){
            Route::get('/get', [ScheduleController::class, 'get']); 
            Route::post('/add', [ScheduleController::class, 'add']);
            Route::delete('/delete/{id?}', [ScheduleController::class, 'delete']); 
        }); 
        Route::group(['prefix' => 'degree'], function(){
            Route::get('/get', [DegreeController::class, 'get']);
            Route::post('/add', [DegreeController::class, 'add']);
            Route::delete('/delete/{id?}', [DegreeController::class, 'delete']);
            Route::put('/update/{id?}', [DegreeController::class, 'update']);
        });
    });
    Route::group(['prefix' => 'subject'], function(){
        Route::get('/get_user_subjects', [SubjectController::class, 'getUserSubjects']); 
        Route::get('/get', [SubjectController::class, 'get']); 
        Route::post('/add', [SubjectController::class, 'add']);
        Route::delete('/delete/{id?}', [SubjectController::class, 'delete']); 
    });
    Route::group(['prefix' => 'appointment'], function(){
        Route::get('/student', [AppointmentController::class, 'getStudentAppointments']);
        Route::get('/tutor', [AppointmentController::class, 'getTutorAppointments']);
        Route::post('/add', [AppointmentController::class, 'add']);
        Route::delete('/delete/{id?}', [AppointmentController::class, 'delete']);
    }); 

});
