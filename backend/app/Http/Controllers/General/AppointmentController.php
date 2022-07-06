<?php

namespace App\Http\Controllers\General;

use Auth;
use Validator;
use App\Models\User;
use App\Models\Schedule;
use App\Models\Appointment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AppointmentController extends Controller{
    public function add(Request $request){
        $student = auth()->user();

        $validator = Validator::make($request->all(), [
            'type' => 'required|integer'
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        
        $appointment = Appointment::create([
            'schedule_id' => $request->schedule_id,
            'student_id' => $student->id,
            'type' => $request->type
        ]);

        return response()->json([
            'status' => 'Success',
            'appointment' => $appointment
        ]);
    }
    public function delete($id){
        $appointment = Appointment::where('schedule_id', $id)->first();

        if ($appointment === null) return response()->json(['error' => 'Not found'], 404);
        
        $appointment->delete();

        return response()->json([
            'status' => 'Success',
            'message' => 'Appointment successfully deleted',
        ]);
    }

}
