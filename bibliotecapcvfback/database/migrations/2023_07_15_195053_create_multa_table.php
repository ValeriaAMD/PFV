<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('multa', function (Blueprint $table) {
            $table->id();
            $table->float('monto',5,2)->nullable();
            $table->dateTime('fecha_pago')->nullable(); 
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->unsignedBigInteger('prestamo_id');
            $table->foreign('prestamo_id')->references('id')->on('prestamo');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('multa');
    }
};
