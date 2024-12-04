import "bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NavHeaderTeacher from "./NavHeaderTeacher";
import HeaderTeacher from "./HeaderTeacher";
import SidebarTeacher from "./SidebarTeacher";

ReactDOM.createRoot(document.getElementById("layout")).render(
    <BrowserRouter>
        <NavHeaderTeacher />
        <HeaderTeacher />
        <SidebarTeacher />
    </BrowserRouter>
);
