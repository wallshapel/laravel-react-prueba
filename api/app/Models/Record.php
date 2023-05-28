<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class Record extends Model {

        use HasFactory;

        protected $table = 'record';        

        public function city() {
            return $this->belongsTo(City::class, 'city_id'); // Si la pimary key de la tabla city no se llama 'id', toca agregarlo después de 'city_id'. Por default se sobrentiende que se llame 'id' y no toca pasarlo como argumento si es así.
        }

        protected $fillable = ['city_id', 'humidity'];

    }