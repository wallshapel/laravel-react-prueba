<?php

    namespace Database\Seeders;

    use App\Models\City;
    use Illuminate\Database\Seeder;

    class DatabaseSeeder extends Seeder {

        public function run(): void {
        
            $city = new City();
            $city->name = 'Miami';
            $city->save();

            $city = new City();
            $city->name = 'New York';
            $city->save();

            $city = new City();
            $city->name = 'Orlando';
            $city->save();

        }

    }