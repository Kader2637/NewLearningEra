import "bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import SidebarStudent from "./SidebarStudent";

const root = ReactDOM.createRoot(document.getElementById("sidebar"));
root.render(
    <BrowserRouter>
        <SidebarStudent />
    </BrowserRouter>
);
