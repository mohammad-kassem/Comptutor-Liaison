<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserSubjectTable extends Migration{
    public function up(){
        Schema::create('user_subject', function (Blueprint $table) {
            $table->integer('user_id');
            $table->integer('subject_id');
            $table->primary(array('user_id', 'subject_id'));
            $table->timestamps();
        });
    }

    public function down(){
        Schema::dropIfExists('user_subject');
    }
}
