<?php

namespace App\Http\Controllers\Tutor;

use Auth;
use Validator;
use App\Models\User;
use App\Models\Degree;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DegreeController extends Controller{
    public function get(){
        $user= auth()->user();

        $degrees = Degree::where('tutor_id', $user->id)->get();

        return response()->json([
            'status' => 'Success',
            'degrees' => $degrees,
        ], 200);
    }
}
