<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\General\JWTController;
use App\Http\Controllers\General\SubjectController;
use App\Http\Controllers\Tutor\DegreeController;
use App\Http\Controllers\Tutor\TutorController;
use App\Http\Controllers\Tutor\ScheduleController;
use App\Http\Controllers\General\AppointmentController;
use App\Http\Controllers\General\UserController;
use App\Http\Controllers\General\SessionController;
use App\Http\Controllers\Student\StudentController;
use App\Http\Controllers\General\EmailVerificationController;





Route::group(['prefix' => 'v1'], function () {
  Route::group(['middleware' => 'tutor'], function ($router) {
    Route::group(['prefix' => 'tutor'], function ($router) {
      Route::put('/update', [TutorController::class, 'update']);
      Route::group(['prefix' => 'schedule'], function ($router) {
        Route::get('/get', [ScheduleController::class, 'get']);
        Route::post('/add', [ScheduleController::class, 'add']);
        Route::delete('/delete/{id?}', [ScheduleController::class, 'delete']);
      });
      Route::group(['prefix' => 'degree'], function () {
        Route::get('/get', [DegreeController::class, 'get']);
        Route::post('/add', [DegreeController::class, 'add']);
        Route::delete('/delete/{id?}', [DegreeController::class, 'delete']);
        Route::put('/update/{id?}', [DegreeController::class, 'update']);
      });
    });
    Route::group(['prefix' => 'appointment'], function ($router) {
      Route::get('/tutor', [AppointmentController::class, 'getTutorAppointments']);
      Route::put('/approve', [AppointmentController::class, 'approve']);
    });
  });
  Route::group(['prefix' => 'auth'], function () {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::put('/image', [UserController::class, 'updateImage']);
  });
  Route::group(['prefix' => 'subject'], function ($router) {
    Route::get('/user', [SubjectController::class, 'getUserSubjects']);
    Route::get('/', [SubjectController::class, 'get']);
    Route::post('/add', [SubjectController::class, 'addUserSubjects']);
    Route::delete('/delete/{id?}', [SubjectController::class, 'delete']);
  });
  Route::group(['prefix' => 'appointment'], function ($router) {
    Route::delete('/delete/{id?}', [AppointmentController::class, 'delete']);
  });
  Route::group(['prefix' => 'session'], function ($router) {
    Route::get('/{id?}', [SessionController::class, 'get']);
    Route::put('/', [SessionController::class, 'create']);
  });
  Route::group(['middleware' => 'student'], function ($router) {
    Route::group(['prefix' => 'tutor'], function () {
      Route::get('/get/{id?}', [TutorController::class, 'get']);
    });
    Route::group(['prefix' => 'tutor'], function () {
      Route::group(['prefix' => 'schedule'], function () {
        Route::get('/available/{id?}', [ScheduleController::class, 'getAvailableTimes']);
      });
    });
    Route::group(['prefix' => 'student'], function ($router) {
      Route::put('/update', [StudentController::class, 'update']);
    });
    Route::group(['prefix' => 'appointment'], function () {
        Route::get('/student', [AppointmentController::class, 'getStudentAppointments']);
        Route::post('/add', [AppointmentController::class, 'add']);
      });
    
  });
  Route::put('/FCM/set', [UserController::class, 'setFCM']);
  Route::put('email/verify', [EmailVerificationController::class, 'verifyEmail']);
  Route::put('email/send', [EmailVerificationController::class, 'sendEmail']);
});
