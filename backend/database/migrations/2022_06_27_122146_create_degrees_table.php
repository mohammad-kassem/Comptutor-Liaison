<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDegreesTable extends Migration{
    public function up(){
        Schema::create('degrees', function (Blueprint $table) {
            $table->id();
            $table->string('university');
            $table->string('degree');
            $table->integer('tutor_id');
            $table->timestamps();
        });
    }

    public function down(){
        Schema::dropIfExists('degrees');
    }
}
