<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsersTable extends Migration{
    public function up(){
        Schema::table('users', function (Blueprint $table) {
            $table->string('activation_code')->after('since')->nullable();
            $table->tinyInteger('is_verified')->after('activation_code');
        });
    }
}
