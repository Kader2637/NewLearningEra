import "bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NavHeader from "./NavHeader";
import Header from "./Header";
import Sidebar from "./Sidebar";

ReactDOM.createRoot(document.getElementById("layout")).render(
    <BrowserRouter>
        <NavHeader />
        <Header />
        <Sidebar />
    </BrowserRouter>
);
