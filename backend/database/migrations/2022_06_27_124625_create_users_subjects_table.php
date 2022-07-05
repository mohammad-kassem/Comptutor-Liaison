<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersSubjectsTable extends Migration{
    public function up(){
        Schema::create('users_subjects', function (Blueprint $table) {
            $table->integer('user_id');
            $table->integer('subject_id');
            $table->primary(array('user_id', 'subject_id'));
            $table->timestamps();
        });
    }

    public function down(){
        Schema::dropIfExists('users_subjects');
    }
}
