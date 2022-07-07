<?php

namespace App\Http\Controllers\Tutor;

use App\Models\User;
use App\Models\Subject;
use App\Models\Schedule;
use App\Models\Appointment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TutorController extends Controller{
    public function get(){
        $tutors = User::with('subjects')->with(['schedules'=>function($querry){
            $querry->with('appointment');}])->with('degrees')->where('role_id', 2)->get();

        return response()->json([
            'status' => 'Success',
            'tutors' => $tutors,
        ], 200);
    }
}
