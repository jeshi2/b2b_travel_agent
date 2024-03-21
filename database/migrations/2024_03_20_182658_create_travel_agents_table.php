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
        Schema::create('travel_agents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string( 'phone_number' );
            $table->string( 'company_name', 100 );
            $table->string( 'country', 20 );
            $table->string( 'city', 20 );
            $table->timestamps();
        });
        Schema::table('travel_agents', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('travel_agents');
    }
};
