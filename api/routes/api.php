<?php

    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Route;

    use App\Http\Controllers\Api\RecordController;

    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });

    Route::controller(RecordController::class)->group(function () { // Con esta forma ya no es necesario usar el prefijo 'api'        
        Route::post('/record', 'store');
        Route::get('/record/city/{id}', 'show');
    });