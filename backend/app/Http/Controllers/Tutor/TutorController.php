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
    public function get($id = null){
        if ($id){
            $tutors = User::with('subjects')->with('degrees')->where('role_id', 2)->where('id', $id)->first();
        }
        else{
            $tutors = User::with('subjects')->where('role_id', 2)->get();
        }

        return response()->json([
            'tutors' => $tutors,
        ], 200);
    }

    public function update(Request $request){
        $validator = Validator::make($request->all(), [
            'rate' => 'required|integer|min:1|max:100',
            'about_me' => 'required|string|min:6',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $tutor = auth()->user();

        $tutor = $user->update([
            'fname' => $user->fname,
            'lname' => $user->lname,
            'role_id' => $user->role_id,
            'rate' => $request->rate,
            'about' => $request->about_me
        ]);

        return response()->json([
            'tutor' => $tutor,
        ], 200);
    }

}
