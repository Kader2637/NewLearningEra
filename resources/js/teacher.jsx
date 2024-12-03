import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import AppTeacher from "./Layouts/Teacher/AppTeacher";

ReactDOM.createRoot(document.getElementById("teacher")).render(
    <BrowserRouter>
        <AppTeacher />
    </BrowserRouter>
);
