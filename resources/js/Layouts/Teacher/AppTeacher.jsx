import "bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import HeaderTeacher from "./HeaderTeacher";

ReactDOM.createRoot(document.getElementById("layout")).render(
    <BrowserRouter>
        <HeaderTeacher />
    </BrowserRouter>
);
