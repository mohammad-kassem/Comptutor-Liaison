<?php

namespace App\Http\Controllers\General;

use Auth;
use Validator;
use App\Models\User;
use App\Models\Subject;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SubjectController extends Controller{
    public function addUserSubjects(Request $request){
        $subjects = $request->subjects;
        $user = auth()->user();
        $added_subjects = [];
        foreach ($subjects as $subject) {
            $subject = json_decode(json_encode($subject));
            $added_subject = $user->subjects()->where('id', $subject->id)->first();

            if ($added_subject) return response()->json(['error' => 'This subject has already been entered'], 409);

            $user->subjects()->attach($subject->id);

            array_push($added_subjects, $subject);
        }

        return response()->json([
            'message' => 'User subjects successfully added',
            'subjects' => $added_subjects
        ], 200);
    }

    
    public function getUserSubjects(){
        $user= auth()->user();

        $subjects = $user->subjects()->get();

        return response()->json([
            'subjects' => $subjects,
        ], 200);
    }

    public function get(){
        $subjects = Subject::get();

        return response()->json([
            'subjects' => $subjects,
        ], 200);
    }

    public function delete($id){
        $user= auth()->user();
        
        $subject = $user->subjects()->where('subject_id', $id)->first();

        if ($subject === null) return response()->json(['message' => 'User subject does not exist'], 204);
        
        $user->subjects()->detach($id);

        return response()->json([
            'message' => 'User subject successfully deleted',
        ], 200);
    }

}
