<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPrinterFieldsToGeneralSettings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('general_settings', function (Blueprint $table) {
            //
            $table->string("printer_ip_1")->after('shop_status')->nullable();
            $table->string("printer_ip_2")->after('printer_ip_1')->nullable();
            $table->string("printer_ip_3")->after('printer_ip_2')->nullable();
            $table->string("printer_ip_4")->after('printer_ip_3')->nullable();
            $table->string("printer_ip_5")->after('printer_ip_4')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('general_settings', function (Blueprint $table) {
            //
        });
    }
}
