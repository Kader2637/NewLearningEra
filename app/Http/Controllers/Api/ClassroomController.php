<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use App\Http\Requests\StoreClassroomRequest;
use App\Http\Requests\UpdateClassroomRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class ClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $classrooms = Classroom::all();
        return response()->json([
            'status' => 'success',
            'data' => $classrooms
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClassroomRequest $request)
    {

        $classroom = Classroom::create([
            'thumbnail' => $request->file('thumbnail')->store('thumbnails'),
            'name' => $request->name,
            'user_id' => $request->user_id,
            'access' => $request->access,
            'code_class' => date('y') . strtoupper(Str::random(4)),
        ]);
        return response()->json([
            'status' => 'success',
            'data' => $classroom
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Classroom $classroom)
    {
        return response()->json([
            'status' => 'success',
            'data' => $classroom
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Classroom $classroom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */ public function update(UpdateClassroomRequest $request, Classroom $classroom)
    {
        //
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Classroom $classroom)
    {
        $classroom->delete();
        Storage::delete($classroom->thumbnail);
        return response()->json([
            'status' => 'success',
            'message' => 'Classroom deleted successfully',
            'data' => $classroom
        ], 200);
    }
}
