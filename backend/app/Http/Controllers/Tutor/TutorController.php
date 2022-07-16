<?php

namespace App\Http\Controllers\Tutor;

use Auth;
use Validator;
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

    public function update(Request $request){
        $validator = Validator::make($request->all(), [
            'rate_chat' => 'required|integer|min:1|max:100',
            'rate_zoom' => 'required|integer|min:1|max:100',
            'about_me' => 'required|string|min:6',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = auth()->user();

        $user = $user->update([
            'fname' => $user->fname,
            'lname' => $user->lname,
            'role_id' => $user->role_id,
            'rate_chat' => $request->rate_chat,
            'rate_zoom' => $request->rate_zoom,
            'about' => $request->about_me
        ]);

    }
}
