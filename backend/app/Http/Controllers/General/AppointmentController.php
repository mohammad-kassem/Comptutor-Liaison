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
            'appointments' => $student_appointments
        ], 200);
    }

    public function getTutorAppointments(){
        $tutor = auth()->user();

        $tutor_appointments = Appointment::where('tutor_id', $tutor->id)->with('student')->with('schedule')->get();
        
        return response()->json([
            'appointments' => $tutor_appointments
        ], 200);
    }

    public function add(Request $request){
        $student = auth()->user();
        
        $appointment = Appointment::create([
            'schedule_id' => $request->schedule_id,
            'student_id' => $student->id,
            'type' => 1,
            'tutor_id' => $request->tutor_id,
        ]);

        return response()->json([
            'message' => 'Appointment successfully added',
            'appointment' => $appointment
        ], 201);
    }

    public function delete($id){
        $appointment = Appointment::where('schedule_id', $id)->first();

        if ($appointment === null) return response()->json(['message' => 'Appointment does not exist'], 204);
        
        $appointment->delete();

        return response()->json([
            'message' => 'Appointment successfully deleted',
        ], 200);
    }

}
