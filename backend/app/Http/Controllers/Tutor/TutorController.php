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
            $user_id = auth()->user()->id;
            $subjects = Subject::with(['users' => function($query) use ($user_id){
                $query->where('user_id', $user_id);
            }])->get();
            $subjects_ids = [];
            foreach($subjects as $subject) {
                array_push($subjects_ids, $subject->id);
            }
            $tutors = User::with('subjects')->whereHas('subjects', function($query) use ($subjects_ids){
                $query->where('id', 2);
            })->where('role_id', 2)->get();
        }

        return response()->json([
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

        $tutor = auth()->user();

        $tutor = $user->update([
            'fname' => $user->fname,
            'lname' => $user->lname,
            'role_id' => $user->role_id,
            'rate_chat' => $request->rate_chat,
            'rate_zoom' => $request->rate_zoom,
            'about' => $request->about_me
        ]);

        return response()->json([
            'tutor' => $tutor,
        ], 200);
    }
}
