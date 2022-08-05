<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Subject;


class SubjectsSeeder extends Seeder
{
    public function run()
    {
      Subject::create([
        'subject' => 'Python',
        'image' => 'http://192.168.1.105:8000/images/python-logo.png'
      ]);
      Subject::create([
        'subject' => 'HTML',
        'image' => 'http://192.168.1.105:8000/images/html-logo.png'
      ]);
      Subject::create([
        'subject' => 'CSS',
        'image' => 'http://192.168.1.105:8000/images/css-logo.png'
      ]);
      Subject::create([
        'subject' => 'Javascript',
        'image' => 'http://192.168.1.105:8000/images/javascript-logo.png'
      ]);
    }
}
