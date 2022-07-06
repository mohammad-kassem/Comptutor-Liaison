<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model{
    use HasFactory;

    protected $fillable = [
        'date',
        'start_time',
        'end_time',
        'tutor_id'
    ];

    public function appointment(){
        return $this->hasOne(Appointment::class);
    }

    public function user(){
        return $this->belongsTo(User::class, 'tutor_id');
    }
}
