import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { ToastContainer } from "react-toastify";
import AdminTesting from "../Pages/Admin/AdminTesting";


const admin = () => {
    return (
        <div>
            <Routes>
            <Route
                    path="/admin"
                    element={
                        <PrivateRoute
                            element={<AdminTesting />}
                            allowedRoles={["admin"]}
                        />
                    }
                />
            </Routes>
        </div>
    );
};

export default admin;
