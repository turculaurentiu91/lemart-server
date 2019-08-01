<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RemovePlatformsFromExpressRequestTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('express_requests', function (Blueprint $table) {
            $table->dropColumn('platforms');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('express_requests', function (Blueprint $table) {
            $table->string('platforms')
                ->after('weight')
                ->nullable();
        });
    }
}
