<?php

namespace App\Http\Controllers\General;

use Auth;
use Validator;
use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\HTTP\Controllers\Controller;

class JWTController extends Controller{
    

    //Register User
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'fname' => 'required|string|min:2|max:255',
            'lname' => 'required|string|min:2|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        if ($request->is_tutor){
            $user = User::create([
                'fname' => $request->fname,
                'lname' => $request->lname,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role_id' => 2,
                'firebase_n' => 0
            ]); 
        }
        else {
            $user = User::create([
                'fname' => $request->fname,
                'lname' => $request->lname,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role_id' => 1,
                'firebase_n' => 0
            ]);
        }

        return response()->json([
            'status' => 'Success',
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }

    //login user
    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (!$token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Invalid cridentials'], 403);
        }

        $user = auth()->user();
        $user->role;

        return response()->json([
            'status' => 'Success',
            'access_token' => $token,
            'user' => $user,
        ], 200);
    }
} 