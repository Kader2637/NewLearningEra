import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ element, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const authToken = localStorage.getItem("authToken");

  if (!authToken || !user) {
    toast.error("Anda belum login. Silakan login terlebih dahulu.");
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    toast.error("Anda tidak memiliki akses ke halaman ini.");
    return <Navigate to="/" replace />;
  }

  return element;
};

export default PrivateRoute;
