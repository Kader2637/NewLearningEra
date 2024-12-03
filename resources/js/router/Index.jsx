import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { ToastContainer } from "react-toastify";

import Home from "../components/HomePage";
import About from "../components/AboutPage";
import Notfound from "../components/NotfoundPage";
import CoursePage from "../Pages/Course/CoursePage";
import LoginPage from "../Pages/Auth/Login/LoginPage";
import RegisterPage from "../Pages/Auth/Register/RegisterPage";
import DashboardPageStudent from "../Pages/Student/Dashboard/DashboardPageStudent";

const Index = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/course" element={<CoursePage />} />
                <Route
                    path="/dashboard/student"
                    element={
                        <PrivateRoute
                            element={<DashboardPageStudent />}
                            allowedRoles={["student"]}
                        />
                    }
                />
                <Route path="/*" element={<Notfound />} />
            </Routes>
            <ToastContainer />
        </div>
    );
};

export default Index;
