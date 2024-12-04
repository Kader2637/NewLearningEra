import React, { useEffect } from "react";

const PrivateRoute = ({ element, allowedRoles }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const authToken = localStorage.getItem("authToken");

    useEffect(() => {
        if (!authToken || !user) {
            window.location.href = "/";
        } else if (!allowedRoles.includes(user.role)) {
            const roleBasedRedirect = {
                admin: "/dashboard/admin",
                teacher: "/dashboard/teacher",
                student: "/dashboard/student",
            };

            const redirectPath = roleBasedRedirect[user.role] || "/";
            window.location.href = redirectPath;
        }
    }, [authToken, user, allowedRoles]);

    return element;
};

export default PrivateRoute;
