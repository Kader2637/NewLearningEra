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

Route::get('/student', function () {
    return view('student');
});


Route::get('/{any}', function ($any) {
    return match ($any) {
        'teacher' => view('teacher'),
        'admin' => view('admin'),
        'student' => view('student'),
        default => view('welcome'),
    };
})->where('any', '.*');


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
