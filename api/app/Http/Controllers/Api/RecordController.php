<?php

    namespace App\Http\Controllers\Api;

    use App\Http\Controllers\Controller;
    use Illuminate\Http\Request;
    use App\Models\Record;

    class RecordController extends Controller {

        public function index() {
            return Record::with('city')->get(); // equivale a Record::all() y el with añade el modelo city relacionado
        } 

        public function store(Request $request) {            
            $record = new Record();
            $record->city_id = $request->city_id;
            $record->humidity = $request->humidity;
            $record->save();
        }

        public function show(string $id) {            
            return Record::where('city_id', $id)->get();
        }

    }