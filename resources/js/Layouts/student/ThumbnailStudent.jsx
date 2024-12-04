import "bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ThumbnailStudentLayout from "./ThumbnailStudentLayout";


ReactDOM.createRoot(document.getElementById("thumbnail")).render(
    <BrowserRouter>
        <ThumbnailStudentLayout />
    </BrowserRouter>
);
