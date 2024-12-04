import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AdminPage from "./components/AdminPage";


ReactDOM.createRoot(document.getElementById("app")).render(
    <BrowserRouter>
        <AdminPage />
    </BrowserRouter>
);
