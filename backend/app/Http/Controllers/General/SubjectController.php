<?php

namespace App\Http\Controllers\General;

use Auth;
use Validator;
use App\Models\User;
use App\Models\Subject;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SubjectController extends Controller{
    public function add(Request $request){
        $user = auth()->user();

        $user->subjects()->attach($request->id);

        return response()->json([
            'status' => 'Success',
            'message' => 'User subject successfully added'
        ], 200);
    }

    
    public function getUserSubjects(){
        $user= auth()->user();

        $subjects = $user->subjects()->get();

        return response()->json([
            'status' => 'Success',
            'subjects' => $subjects,
        ], 200);
    }

    public function get(){
        $subjects = Subject::get();

        return response()->json([
            'status' => 'Success',
            'subjects' => $subjects,
        ], 200);
    }

    public function delete($id){
        $user= auth()->user();

        $subjects = $user->subjects()->detach($id);

        return response()->json([
            'status' => 'Success',
            'message' => 'User subject successfully deleted'
        ], 200);
    }

}
