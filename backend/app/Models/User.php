<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    protected $fillable = [
        'fname',
        'lname',
        'email',
        'password',
        'role_id',
        'firebase_n',
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
}
