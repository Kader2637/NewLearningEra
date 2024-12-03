<?php

namespace App\Http\Controllers\Api;

use App\Models\Course;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class CourseController extends Controller
{

    public function index(){
        $courses = Course::all();
        return response()->json([
            'status' => 'success',
            'data' => $courses
        ], 200);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourseRequest $request)
    {
        $course = Course::create([
            'name' => $request->name,
            'description' => $request->description,
            'classroom_id' => $request->classroom_id,
            'thumbnail' => $request->file('thumbnail')->store('thumbnails')
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Course Create successfully',
            'data' => $course
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        return response()->json([
            'status' => 'success',
            'data' => $course
        ], 200);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourseRequest $request, Course $course)
    {
        if ($course->thumbnail && $request->hasFile('thumbnail')) {
            Storage::delete($course->thumbnail);
        }

        $course->update([
            'name' => $request->name,
            'description' => $request->description,
            'classroom_id' => $request->classroom_id,
            'thumbnail' => $request->hasFile('thumbnail')
                ? $request->file('thumbnail')->store('thumbnails')
                : $course->thumbnail
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Course Update successfully',
            'data' => $course
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        $course->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'Course deleted successfully',
            'data' => $course
        ], 200);
    }
}
