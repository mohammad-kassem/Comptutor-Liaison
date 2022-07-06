<?php

namespace App\Http\Controllers\Tutor;

use App\Models\User;
use App\Models\Subject;
use App\Models\Schedule;
use App\Models\Appointment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TutorController extends Controller{
    public function get($id = null){
        if ($id){
            $tutors = User::where('id', $id)->with('subjects')->with(['schedules'=>function($querry){
                $querry->with('appointments');}])->first();
        }

        else{
            $tutors = User::with('subjects')->with(['schedules'=>function($querry){
                $querry->with('appointments');}])->where('role_id', 2)->get();
        }

        return response()->json([
            'status' => 'Success',
            'tutors' => $tutors,
        ], 200);
    }
}
