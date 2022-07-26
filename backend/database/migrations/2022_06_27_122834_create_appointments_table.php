<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentsTable extends Migration{
    public function up(){
        Schema::create('appointments', function (Blueprint $table) {
            $table->integer('schedule_id')->primary();
            $table->integer('student_id');
            $table->timestamps();
        });
    }

    public function down(){
        Schema::dropIfExists('appointments');
    }
}
