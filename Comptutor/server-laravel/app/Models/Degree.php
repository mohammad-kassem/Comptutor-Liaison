<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Degree extends Model
{
  use HasFactory;

  protected $fillable = [
    'university',
    'degree',
    'tutor_id'
  ];

  public function user()
  {
    return $this->belongsTo(User::class, 'tutor_id');
  }
}
