<?php

use App\Http\Controllers\Api\CourseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/course' , [CourseController::class , 'store']);
Route::put('/course/{course}' , [CourseController::class , 'update']);
Route::delete('/course/{course}' , [CourseController::class , 'destroy']);
Route::get('/courseAll' , [CourseController::class , 'index']);
Route::get('/ShowCourse/{course}' , [CourseController::class , 'show']);
