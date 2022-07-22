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

    
    public function sendNotification($FCM_token){
        $user = auth()->user();
        $url = 'https://fcm.googleapis.com/fcm/send';
        $api_key='AAAAyUzFkbY:APA91bHi9O4P9J7zIlSi5L5ein8OxVcVI40aEFNn8bATBruombexZOC9a0uaP5y6sYndPJ9dthvu5JHfCzgpfcYj_EhfKQP8CUxaYUOuVIJ59voHNETiXRoiScFoNgZiXT4fz7l9MLkd';
        $fields =([
        'to' => $FCM_token,
        'notification' => array (
            "title" => "Appointment booked",
            "body" => $user->fname." ".$user->lname." booked an appointment"
        )
        ]);  
        $headers = array(
            'Content-Type:application/json',
            'Authorization:key='.$api_key
        );
            
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
        $result = curl_exec($ch);
        if ($result === FALSE) {
            die('FCM Send Error: ' . curl_error($ch));
        }
        // echo($result);
        curl_close($ch);
        return ($result);

    }
}