<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CategoryCourse;
use App\Http\Requests\StoreCategoryCourseRequest;
use App\Http\Requests\UpdateCategoryCourseRequest;

class CategoryCourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $category = CategoryCourse::all();
        return response()->json([
            'status' => 'success',
            'data' => $category
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
    public function store(StoreCategoryCourseRequest $request)
    {
        $category = CategoryCourse::create($request->all());
        return response()->json([
            'status' => 'success',
            'data' => $category
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(CategoryCourse $categoryCourse)
    {
        return response()->json([
            'status' => 'success',
            'data' => $categoryCourse
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CategoryCourse $categoryCourse)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryCourseRequest $request, CategoryCourse $categoryCourse)
    {
        $categoryCourse->update($request->all());
        return response()->json([
            'status' => 'success',
            'data' => $categoryCourse
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CategoryCourse $categoryCourse)
    {
        $categoryCourse->delete();
        return response()->json([
            'status' => 'success',
            'data' => $categoryCourse
        ], 200);
    }
}
