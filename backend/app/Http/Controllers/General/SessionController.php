<?php

namespace App\Http\Controllers\General;

use Auth;
use Validator;
use App\Models\User;
use App\Models\Appointment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class SessionController extends Controller{
    public function create(Request $request){
        $appointment = Appointment::where('schedule_id', $request->id)->first();

        $appointment->update([
            'url' => $request->url
        ]);
        
        return response()->json([
            'message' => 'Session successfully created'
        ], 201);

    }

    public function get($id){
        $appointment = Appointment::where('schedule_id', $id)->first();
        
        return response()->json([
            'url' => $appointment->url
        ], 200);

    }
}