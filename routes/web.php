<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/teacher', function () {
    return view('teacher');
});
Route::get('/admin', function () {
    return view('admin');
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
