<?php

namespace App\Http\Controllers\Tutor;

use Auth;
use Validator;
use App\Models\User;
use App\Models\Degree;
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
            'fname' => 'required|string|min:2|max:255',
            'lname' => 'required|string|min:2|max:255',
            'rate' => 'required|integer|min:1|max:100',
            'about' => 'required|string|min:6',
            'years' => 'required|integer'
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $tutor = auth()->user();

        $tutor->update([
            'fname' => $request->fname,
            'lname' => $request->lname,
            'rate' => $request->rate,
            'about' => $request->about,
            'since' => $request->years,
        ]);

        return response()->json([
            'message' => 'Account info successfully updated',
            'tutor' => $tutor,
        ], 200);
    }
}
