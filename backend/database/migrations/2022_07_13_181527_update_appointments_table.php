<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateAppointmentsTable extends Migration{
    public function up(){
        Schema::table('appointments', function (Blueprint $table) {
            $table->integer('tutor_id')->after("student_id");
        });
    }
}