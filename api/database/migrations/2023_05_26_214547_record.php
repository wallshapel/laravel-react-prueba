<?php

    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    return new class extends Migration {

        public function up(): void {

            Schema::create('record', function (Blueprint $table) {

                $table->engine = 'InnoDB';
                $table->bigIncrements('id');
                $table->bigInteger('city_id')->unsigned();
                $table->integer('humidity');
                $table->timestamps();

                $table->foreign('city_id')->references('id')->on('cities')->onDelete('cascade');

            });
        }

        public function down(): void {

            Schema::dropIfExists('record');
            
        }

    };