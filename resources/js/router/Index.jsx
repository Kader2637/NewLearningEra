import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/HomePage";
import About from "../components/AboutPage";
import Notfound from "../components/NotfoundPage";

const Index = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Notfound />} />
            </Routes>
        </div>
    );
};

export default Index;
