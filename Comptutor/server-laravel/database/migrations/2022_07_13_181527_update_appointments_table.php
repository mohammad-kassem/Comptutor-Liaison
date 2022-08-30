<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateAppointmentsTable extends Migration
{
  public function up()
  {
    Schema::table('appointments', function (Blueprint $table) {
      $table->integer('tutor_id')->after("student_id");
      $table->string('url')->after('tutor_id')->nullable();
      $table->tinyInteger('status')->after('url')->default(0);
    });
  }
}
