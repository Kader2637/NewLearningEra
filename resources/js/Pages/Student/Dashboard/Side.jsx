import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Side = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        localStorage.removeItem("authToken");
        localStorage.removeItem("user");

        setIsLoggedIn(false);

        window.location.href = "/";
    };

    return (
        <div className="col-lg-3">
            <div className="dashboard__sidebar-wrap">
                <div className="dashboard__sidebar-title mb-20">
                    <h6 className="title">Welcome, Emily Hannah</h6>
                </div>
                <nav className="dashboard__sidebar-menu">
                    <ul className="list-wrap">
                        <li className="active">
                            <a href="student-dashboard.html">
                                <i className="fas fa-home"></i> Dashboard
                            </a>
                        </li>
                        <li>
                            <NavLink to="/student/classroom">
                                <i className="skillgro-avatar"></i> Kelas
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="dashboard__sidebar-title mt-30 mb-20">
                    <h6 className="title">User</h6>
                </div>
                <nav className="dashboard__sidebar-menu">
                    <ul className="list-wrap">
                        <li>
                            <a
                                href="#"
                                onClick={handleLogout}
                                style={{ cursor: "pointer" }}
                            >
                                <i className="skillgro-logout"></i> Keluar
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Side;
