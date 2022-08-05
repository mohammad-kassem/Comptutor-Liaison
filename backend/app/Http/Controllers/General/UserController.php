<?php

namespace App\Http\Controllers\General;

use Auth;
use Validator;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
  public function setFCM(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'FCM_token' => 'required|string',
    ]);


    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }

    $user = User::find($request->id);

    $user->update([
      'FCM_token' => $request->FCM_token,
    ]);


    return response()->json([
      'message' => 'FCM token successfully set',
      'user' => $user,
    ], 200);
  }

  public function updateImage(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'image' => 'required|string',
    ]);


    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }

    $user = auth()->user();

    $user->update([
      'profile_image' => $request->image
    ]);

    return response()->json([
      'message' => 'Account image successfully updated',
      'user' => $user,
    ], 200);
  }
}
