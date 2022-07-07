<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Illuminate\Http\Request;

class StudentMiddleware{
    public function handle(Request $request, Closure $next){
        $user = auth()->user();
        if($user and $user->role_id == 1){
            return $next($request);
        }

        return response()->json(['error' => 'Unauthorized'], 403);
    }
}
