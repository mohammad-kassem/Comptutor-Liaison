<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model{
    use HasFactory;

    protected $fillable = [
        'schedule_id',
        'student_id',
        'type',
        'zoom_url',

    ];
    public function schedule(){
        return $this->belongsTo(Schedule::class);
    }

    public function user(){
        return $this->belongsTo(User::class, 'student_id');
    }
}
