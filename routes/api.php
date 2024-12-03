<?php

use App\Http\Controllers\Api\CategoryCourseController;
use App\Http\Controllers\Api\ClassroomController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


Route::post('/actionLogin', [LoginController::class, 'login']);
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// course api
Route::post('/course' , [CourseController::class , 'store']);
Route::put('/course/{course}' , [CourseController::class , 'update']);
Route::delete('/course/{course}' , [CourseController::class , 'destroy']);
Route::get('/courseAll' , [CourseController::class , 'index']);
Route::get('/ShowCourse/{course}' , [CourseController::class , 'show']);


// classrooms
Route::get('classroom' , [ClassroomController::class , 'index']);
Route::post('classroom' , [ClassroomController::class , 'store']);
Route::get('classroom/{classroom}' , [ClassroomController::class , 'show']);
Route::delete('classroomDelete/{classroom}' , [ClassroomController::class , 'destroy']);


