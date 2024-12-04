import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import TeacherPage from "./components/TeacherPage";

ReactDOM.createRoot(document.getElementById("teacher")).render(
    <BrowserRouter>
        <TeacherPage />
    </BrowserRouter>
);
