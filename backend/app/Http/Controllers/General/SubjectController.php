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

}
