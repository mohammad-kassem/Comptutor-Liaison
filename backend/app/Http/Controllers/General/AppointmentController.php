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
    public function getStudentAppointments(){
        $student = auth()->user();

        $student_appointments = Appointment::where('student_id', $student->id)->with('tutor')->with('schedule')->get();
        
        return response()->json([
            'status' => 'Success', 
            'appointments' => $student_appointments
        ]);
    }

    public function getTutorAppointments(){
        $tutor = auth()->user();

        $tutor_appointments = Appointment::where('tutor_id', $tutor->id)->with('student')->with('schedule')->get();
        // User::with(['schedules'=>function($querry){
        //     $querry->with('appointment');
        // }])->where('id', $tutor->id)->get();
        
        return response()->json([
            'status' => 'Success',
            'appointments' => $tutor_appointments
        ]);
    }

    public function add(Request $request){
        $student = auth()->user();

        // $validator = Validator::make($request->all(), [
        //     'type' => 'required|integer'
        // ]);

        // if($validator->fails()) {
        //     return response()->json($validator->errors(), 400);
        // }
        
        $appointment = Appointment::create([
            'schedule_id' => $request->schedule_id,
            'student_id' => $student->id,
            'type' => 1,
            'tutor_id' => $request->tutor_id,
        ]);

        return response()->json([
            'status' => 'Success',
            'message' => 'Appointment successfully added',
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
