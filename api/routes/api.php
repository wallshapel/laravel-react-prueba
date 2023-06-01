<?php

    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Route;

    use App\Http\Controllers\Api\RecordController;
    use App\Http\Controllers\Api\CityController;

    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });

    Route::controller(CityController::class)->group(function () { // Con esta forma ya no es necesario usar el prefijo 'api'        
        Route::get('/', 'index');
    });

    Route::controller(RecordController::class)->group(function () { // Con esta forma ya no es necesario usar el prefijo 'api'        
        Route::get('/record', 'index');       
        Route::post('/record', 'store');        
    });