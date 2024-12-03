import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("app")).render(
    <BrowserRouter>
        <App />
        <Footer />
    </BrowserRouter>
);
