<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model{
    use HasFactory;

    protected $fillable = [
        'schedule_id',
        'student_id',
        'tutor_id',
        'type',
        'zoom_url',

    ];

    protected $primaryKey = 'schedule_id';

    public function schedule(){
        return $this->belongsTo(Schedule::class);
    }

    public function student(){
        return $this->belongsTo(User::class, 'student_id');
    }

    public function tutor(){
        return $this->belongsTo(User::class, 'tutor_id');
    }
}
