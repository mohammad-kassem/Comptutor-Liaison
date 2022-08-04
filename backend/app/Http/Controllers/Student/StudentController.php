<?php

namespace App\Http\Controllers\Student;

use Auth;
use Validator;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StudentController extends Controller{
    public function update(Request $request){   
        $validator = Validator::make($request->all(), [
            'fname' => 'required|string|min:2|max:255',
            'lname' => 'required|string|min:2|max:255',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $student = auth()->user();

        $student->update([
            'fname' => $request->fname,
            'lname' => $request->lname
        ]);

        return response()->json([
            'message' => 'Account info successfully updated',
            'student' => $student,
        ], 200);
    }
}