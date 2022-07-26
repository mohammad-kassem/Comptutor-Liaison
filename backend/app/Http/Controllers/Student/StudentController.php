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
            'fname' => 'required|string',
            'lname' => 'required|string',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $student = User::find($request->id);

        $student->update([
            'fname' => $request->fname,
            'lname' => $request->lname
        ]);

        return response()->json([
            'student' => $student,
        ], 200);
    }
}