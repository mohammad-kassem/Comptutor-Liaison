<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;


class User extends Authenticatable implements JWTSubject{
    use HasFactory, Notifiable;

    protected $fillable = [
        'fname',
        'lname',
        'email',
        'password',
        'role_id',
        'firebase_n',
        'rate_chat',
        'rate_zoom',
        'profile_image'
        
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function schedules(){
        return $this->hasMany(Schedule::class);
    }

    public function degrees(){
        return $this->hasMany(Degree::class);
    }

    public function appointments(){
        return $this->hasMany(Appointment::class);
    }

    
    public function role(){
        return $this->belongsTo(Role::class);
    }

    public function subjects(){
        return $this->belongsToMany(Subject::class, 'user_subject')
        ->as('user_subject')
        ->withTimestamps();
    }
    public function getJWTIdentifier(){
        return $this->getKey();
    }

    public function getJWTCustomClaims(){
        return [];
    }

}
