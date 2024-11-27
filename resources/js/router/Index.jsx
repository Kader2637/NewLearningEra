import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/HomePage";
import About from "../components/AboutPage";
import Notfound from "../components/NotfoundPage";
import CoursePage from "../components/Course/CoursePage";
import LoginPage from "../components/Auth/Login/LoginPage";
import RegisterPage from "../components/Auth/Register/RegisterPage";

const Index = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/course" element={<CoursePage />} />
                <Route path="/*" element={<Notfound />} />
            </Routes>
        </div>
    );
};

export default Index;
