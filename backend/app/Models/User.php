<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;


class User extends Authenticatable implements JWTSubject, MustVerifyEmail
{
  use HasFactory, Notifiable;

  protected $fillable = [
    'fname',
    'lname',
    'email',
    'password',
    'role_id',
    'rate',
    'profile_image',
    'about',
    'FCM_token',
    'since',
    'activation_code',
    'is_verified'

  ];

  protected $hidden = [
    'password',
    'remember_token',
  ];

  protected $casts = [
    'email_verified_at' => 'datetime',
  ];

  public function schedules()
  {
    return $this->hasMany(Schedule::class, 'tutor_id');
  }

  public function degrees()
  {
    return $this->hasMany(Degree::class, 'tutor_id');
  }

  public function studentAppointments()
  {
    return $this->hasMany(Appointment::class, 'student_id');
  }

  public function tutorAppointments()
  {
    return $this->hasMany(Appointment::class, 'tutor_id');
  }


  public function role()
  {
    return $this->belongsTo(Role::class);
  }

  public function subjects()
  {
    return $this->belongsToMany(Subject::class, 'user_subject')
      ->as('user_subject')
      ->withTimestamps();
  }
  public function getJWTIdentifier()
  {
    return $this->getKey();
  }

  public function getJWTCustomClaims()
  {
    return [];
  }
}
