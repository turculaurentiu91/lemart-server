<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEasypressRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('easypress_requests', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('appartament_count');
            $table->string('email');
            $table->string('note')->nullable();
            $table->float('price_one');
            $table->float('price_two');
            $table->float('price_plus');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('easypress_requests');
    }
}
