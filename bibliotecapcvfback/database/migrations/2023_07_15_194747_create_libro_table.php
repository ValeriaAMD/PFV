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
        Schema::create('libro', function (Blueprint $table) {
            $table->id();
            $table->string('titulo')->nullable();
            $table->float('isbn',15,2)->nullable(); 
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->unsignedBigInteger('autor_id');
            $table->foreign('autor_id')->references('id')->on('Autor');
            $table->unsignedBigInteger('editorial_id');
            $table->foreign('editorial_id')->references('id')->on('editorial');
            $table->unsignedBigInteger('categoria_id');
            $table->foreign('categoria_id')->references('id')->on('categoria');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('libro');
    }
};
