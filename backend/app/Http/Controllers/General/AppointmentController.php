<?php

namespace App\Http\Controllers\General;

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
        
        $validator = Validator::make($request->all(), [
            'schedule_id' => 'required|integer',
            'tutor_id' => 'required|integer',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $appointment = Appointment::create([
            'schedule_id' => $request->schedule_id,
            'student_id' => $student->id,
            'tutor_id' => $request->tutor_id,
        ]);
        
        $FCM_token = User::where('id', $request->tutor_id)->first();
        $schedule = Schedule::where('id', $request->schedule_id)->first();
        $this -> sendNotification($FCM_token->FCM_token, $schedule, 'request');

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

        if ($diff < 15){ 
            return response()->json(['message' => 'The appointment cancel time is over', 409]);
        }
        
        if ($user->id == $appointment->student_id){
            $FCM_token = User::where('id', $appointment->tutor_id)->first();
        }
        else {
            $FCM_token = User::where('id',  $appointment->student_id)->first();
        }

        $this -> sendNotification($FCM_token->FCM_token, $schedule, 'cancel');
        $appointment->delete();

        return response()->json([
            'message' => 'Appointment successfully deleted',
        ], 200);
    }

    public function approve(Request $request){
        $appointment = Appointment::where('schedule_id', $request->schedule_id)->first();

        if ($appointment === null) return response()->json(['message' => 'Appointment does not exist'], 204);

        $FCM_token = User::where('id', $appointment->student_id)->first();
        $schedule = Schedule::where('id', $request->schedule_id)->first();
        $this -> sendNotification($FCM_token->FCM_token, $schedule, 'approve');

        $appointment->update([
            'status' => 1
        ]);

        $appointment->schedule;
        $appointment->tutor;
        $appointment->student;


        return response()->json([
            'message' => 'Appointment successfully accepted',
            'appointment' => $appointment,
        ], 200);
    }

    
    public function sendNotification($FCM_token, $schedule, $type){
        $user = auth()->user();
        $url = 'https://fcm.googleapis.com/fcm/send';
        $api_key=env('push');
        
        if ($type === 'request'){
            $fields =([
            'to' => $FCM_token,
            'notification' => ([
                "title" => "Appointment requested",
                "body" => $user->fname." ".$user->lname." requested an appointment at ".$schedule->date." ".$schedule->start_time
                ])
            ]);  
        }
        else if($type === 'cancel'){
            $fields =([
                'to' => $FCM_token,
                'notification' => ([
                    "title" => "Appointment canceled",
                    "body" => $user->fname." ".$user->lname." canceled their appointment at ".$schedule->date." ".$schedule->start_time
                    ])
                ]);  
        }

        else{
            $fields =([
                'to' => $FCM_token,
                'notification' => ([
                    "title" => "Appointment booked",
                    "body" => $user->fname." ".$user->lname." accepted the appointment at ".$schedule->date." ".$schedule->start_time
                    ])
                ]);  
        }

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
        curl_close($ch);
        return ($result);

    }
}
