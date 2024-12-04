import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SidebarStudent = () => {
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
        <div className="dashboard__sidebar-wrap">
            <div className="dashboard__sidebar-title mb-20">
                <h6 className="title">Welcome, Abdul Kader</h6>
            </div>
            <nav className="dashboard__sidebar-menu">
                <ul className="list-wrap">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Tentang Kami</NavLink>
                    </li>
                    <li>
                        <NavLink to="/course">Kelas</NavLink>
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
                            <i className="skillgro-logout"></i> Log out
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SidebarStudent;
