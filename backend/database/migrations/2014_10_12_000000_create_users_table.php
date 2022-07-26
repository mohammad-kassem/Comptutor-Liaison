<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration{
    public function up(){
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('fname');
            $table->string('lname');
            $table->string('email')->unique();
            $table->string('password');
            $table->integer('role_id');
            $table->integer('rate');
            $table->string('FCM_token')->nullable();
            $table->string('profile_image')->nullable();
            $table->string('about')->nullable();
            $table->integer('since')->nullable();
            $table->integer('balance')->nullable();
            $table->timestamps();
        });
    }

    public function down(){
        Schema::dropIfExists('users');
    }
}
