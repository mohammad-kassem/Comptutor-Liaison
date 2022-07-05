<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model{
    use HasFactory;

    protected $fillable = [
        'schdeule_id',
        'student_id',
        'type',
        'zoom_url',

    ];

}
