<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUserDataTypes extends Migration{
  public function up(){
      Schema::table('users', function (Blueprint $table) {
          $table->text('about')->change();
      });
  }
}
