<?php

namespace App\Http\Controllers\Tutor;

use Auth;
use Validator;
use App\Models\User;
use App\Models\Schedule;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ScheduleController extends Controller{
    public function get(){
        $user= auth()->user();
        
        $schedules = Schedule::where('tutor_id', $user->id)->get();

        return response()->json([
            'schedules' => $schedules,
        ], 200);
    }

    public function getAvailableTimes($id){
        $schedules = Schedule::where('tutor_id', $id)->get();

        $available_times = [];
        foreach ($schedules as $schedule){
            if (!$schedule->appointment) array_push($available_times, $schedule); 
        }

        return response()->json([
            'available_times' => $available_times,
        ], 200);
    }

    public function add(Request $request){
        $hours = $request->hours;
        $user = auth()->user();
        $schedules = [];
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

            array_push($schedules, $available_hour);
        }

        return response()->json([
            'message' => 'Schedule successfully added',
            'schedules' => $schedules
        ], 201);
    }

    public function delete($id){
        $schedule = $schedule = Schedule::find($id);
        if ($schedule === null) return response()->json(['message' => 'Schedule does not exist'], 204);

        $schedule->delete();

        return response()->json([
            'mesasage' => 'Schedule successfully deleted'
        ], 200);
    }
}
