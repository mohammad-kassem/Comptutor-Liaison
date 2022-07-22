<?php

namespace App\Http\Controllers\General;

use Auth;
use Validator;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller{
    public function setFCM(Request $request){
            
        $tutor = User::find($request->id);

        $tutor = $tutor->update([
            'fname' => $request->fname,
            'lname' => $request->lname,
            'rate' => $request->rate,
            'about' => $request->about_me,
            'FCM_token' => $request->FCM_token,
        ]);
        

        return response()->json([
            'message' => 'Account info successfully updated',
        ], 200);
    }
}