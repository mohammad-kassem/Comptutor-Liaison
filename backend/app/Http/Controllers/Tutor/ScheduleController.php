<?php

namespace App\Http\Controllers\Tutor;

use Auth;
use Validator;
use App\Models\User;
use App\Models\Schedule;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ScheduleController extends Controller{
    public function add(Request $request){
        $hours = $request->hours;
        $user = auth()->user();
        $schedule = [];
        
        foreach($hours as $hour){
            $hour = json_decode(json_encode($hour));

            $validator = Validator::make(get_object_vars($hour), [
                'date' => 'required|date_format:Y-m-d',
                'start_time' => 'required|date_format:H:i',
                'end_time' => 'required|date_format:H:i|after:start_time'
            ]);

            if($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }

            $available_hour = Schedule::create([
                'tutor_id' => $user->id,
                'date' => $hour->date,
                'start_time' => $hour->start_time,
                'end_time' => $hour->end_time,
            ]);

            array_push($schedule, $available_hour);
        }

        return response()->json([
            'status' => 'Success',
            'schedule' => $schedule
        ]);
    }

}
