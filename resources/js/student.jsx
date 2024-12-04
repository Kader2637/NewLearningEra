import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import RouterDataStudent from "./components/RouterDataStudent";

ReactDOM.createRoot(document.getElementById("content")).render(
    <BrowserRouter>
        <RouterDataStudent />
    </BrowserRouter>
);
