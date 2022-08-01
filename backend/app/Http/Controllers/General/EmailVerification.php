<?php

namespace App\Http\Controllers\General;

use Auth;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Mail\VerificationMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailVerification extends Controller{
    public function verifyEmail(Request $request){
        $user = auth()->user();

        if ($request->code === $user->activation_code){
            $user->update([
                'is_verified' => 1
            ]);
        }

        else return response()->json(['message'=>['Wrong activation code']], 401);

        return response()->json([
            'message' => 'Email successfully verified',
            'user' => $user
        ], 200); 
        
    }


    public function setCode(){    
        $user = auth()->user();

        $length = 4;
        $characters = '0123456789';
        $charactersLength = strlen($characters);
        $code = '';
        for ($i = 0; $i < $length; $i++) {
            $code .= $characters[rand(0, $charactersLength - 1)];
        }
        
        $user->update([
            'activation_code' => $code
        ]);

        return response()->json([
            'message' => 'Activation code successfully set',
        ], 200); 
    }
}