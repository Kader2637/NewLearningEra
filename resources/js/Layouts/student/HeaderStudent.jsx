import "bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NavbarStudent from "./NavbarStudent";


ReactDOM.createRoot(document.getElementById("header")).render(
    <BrowserRouter>
        <NavbarStudent />
    </BrowserRouter>
);
