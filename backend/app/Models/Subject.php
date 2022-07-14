<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model{
    use HasFactory;

    protected $fillable = [
        'subject',
        'image'
    ];

    public function users(){
        return $this->belongsToMany(User::class, 'user_subject')
        ->as('user_subject')
        ->withTimestamps();
    }

}
