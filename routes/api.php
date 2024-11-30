<?php

use App\Http\Controllers\Api\CategoryCourseController;
use App\Http\Controllers\Api\CourseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// course api
Route::post('/course' , [CourseController::class , 'store']);
Route::put('/course/{course}' , [CourseController::class , 'update']);
Route::delete('/course/{course}' , [CourseController::class , 'destroy']);
Route::get('/courseAll' , [CourseController::class , 'index']);
Route::get('/ShowCourse/{course}' , [CourseController::class , 'show']);

// category course api
Route::get('categoryCourse' , [CategoryCourseController::class , 'index']);
Route::get('categoryCourseShow' , [CategoryCourseController::class , 'show']);
Route::post('CreatecategoryCourse' , [CategoryCourseController::class , 'store']);
Route::put('UpdatecategoryCourse/{categoryCourse}' , [CategoryCourseController::class , 'update']);
Route::delete('DeletecategoryCourse/{categoryCourse}' , [CategoryCourseController::class , 'destroy']);

