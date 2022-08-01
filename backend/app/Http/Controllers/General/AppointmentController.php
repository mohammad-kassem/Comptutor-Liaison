<?php

namespace App\Http\Controllers\General;

use Auth;
use Validator;
use DateTime;
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
            'tutor_id' => $request->tutor_id,
        ]);
        
        $FCM_token = User::where('id', $request->tutor_id)->first();
        $schedule = Schedule::where('id', $request->schedule_id)->first();
        $this -> sendRequestNotification($FCM_token->FCM_token, $schedule);

        return response()->json([
            'message' => 'Appointment successfully added',
            'appointment' => $appointment
        ], 201);
    }

    public function delete($id){
        $user = auth()->user();
        $appointment = Appointment::where('schedule_id', $id)->first();

        if ($appointment === null) return response()->json(['message' => 'Appointment does not exist'], 204);
        
        $schedule = Schedule::where('id', $id)->first();

        date_default_timezone_set('Asia/Beirut');
        $current_time = strtotime(date('Y-m-d H:i'));
        $start_time = strtotime($schedule->date." ".$schedule->start_time);
        $diff = ($start_time - $current_time )/ 60;

        if ($diff < 15) return response()->json(['message' => 'The appointment cancel time is over', 409]);

        if ($user->id == $appointment->student_id){
            $FCM_token = User::where('id', $appointment->tutor_id)->first();
        }
        else {
            $FCM_token = User::where('id',  $appointment->student_id)->first();
        }

        $this -> sendCancelNotification($FCM_token->FCM_token, $schedule);
        $appointment->delete();

        return response()->json([
            'message' => 'Appointment successfully deleted',
        ], 200);
    }

    public function approve(Request $request){
        $appointment = Appointment::where('schedule_id', $request->schedule_id)->first();

        $FCM_token = User::where('id', $request->student_id)->first();
        $schedule = Schedule::where('id', $request->schedule_id)->first();
        $this -> sendApproveNotification($FCM_token->FCM_token, $schedule);

        if ($appointment === null) return response()->json(['message' => 'Appointment does not exist'], 204);

        $appointment->update([
            'status' => 1
        ]);

        return response()->json([
            'message' => 'Appointment successfully accepted',
        ], 200);
    }

    
    public function sendRequestNotification($FCM_token, $schedule){
        $user = auth()->user();
        $url = 'https://fcm.googleapis.com/fcm/send';
        $api_key='AAAAyUzFkbY:APA91bHi9O4P9J7zIlSi5L5ein8OxVcVI40aEFNn8bATBruombexZOC9a0uaP5y6sYndPJ9dthvu5JHfCzgpfcYj_EhfKQP8CUxaYUOuVIJ59voHNETiXRoiScFoNgZiXT4fz7l9MLkd';
        $fields =([
        'to' => $FCM_token,
        'notification' => array (
            "title" => "Appointment requested",
            "body" => $user->fname." ".$user->lname." requested an appointment at ".$schedule->date." ".$schedule->start_time
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

    public function sendCancelNotification($FCM_token, $schedule){
        $user = auth()->user();
        $url = 'https://fcm.googleapis.com/fcm/send';
        $api_key='AAAAyUzFkbY:APA91bHi9O4P9J7zIlSi5L5ein8OxVcVI40aEFNn8bATBruombexZOC9a0uaP5y6sYndPJ9dthvu5JHfCzgpfcYj_EhfKQP8CUxaYUOuVIJ59voHNETiXRoiScFoNgZiXT4fz7l9MLkd';
        $fields =([
        'to' => $FCM_token,
        'notification' => array (
            "title" => "Appointment canceled",
            "body" => $user->fname." ".$user->lname." canceled their appointment at ".$schedule->date." ".$schedule->start_time
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

    public function sendApproveNotification($FCM_token, $schedule){
        $user = auth()->user();
        $url = 'https://fcm.googleapis.com/fcm/send';
        $api_key='AAAAyUzFkbY:APA91bHi9O4P9J7zIlSi5L5ein8OxVcVI40aEFNn8bATBruombexZOC9a0uaP5y6sYndPJ9dthvu5JHfCzgpfcYj_EhfKQP8CUxaYUOuVIJ59voHNETiXRoiScFoNgZiXT4fz7l9MLkd';
        $fields =([
        'to' => $FCM_token,
        'notification' => array (
            "title" => "Appointment booked",
            "body" => $user->fname." ".$user->lname." accepted the appointment at ".$schedule->date." ".$schedule->start_time
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