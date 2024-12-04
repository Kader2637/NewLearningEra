import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import DashboardPageStudent from "../Pages/Student/Dashboard/DashboardPageStudent";
import ClassroomPage from "../Pages/Student/Classroom/ClassroomPage";

const student = () => {
    return (
        <div>
            <Routes>
                <Route path="/student" element={<DashboardPageStudent />} />
                <Route path="/student/classroom" element={<ClassroomPage />} />
            </Routes>
        </div>
    );
};

export default student;
