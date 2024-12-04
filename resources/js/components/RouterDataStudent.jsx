import React, { useEffect, useState } from "react";
import Router from "../router/student";
import { NavLink } from "react-router-dom";

const RouterDataStudent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const user = JSON.parse(localStorage.getItem("user"));

        setIsLoggedIn(!!token);
        setUserRole(user?.role);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        window.location.href = "/";
    };

    const navigateHome = () => {
        const homePath = getHomePath();
        window.location.href = homePath;
    };

    const getHomePath = () => {
        if (userRole === "admin") return "/admin";
        if (userRole === "teacher") return "/teacher";
        if (userRole === "student") return "/student";
        return "/";
    };

    return (
        <div>
            <header>
                <div id="header-fixed-height"></div>
                <div id="sticky-header" className="tg-header__area">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tgmenu__wrap">
                                    <nav className="tgmenu__nav">
                                        <div className="logo">
                                            <a href="/">
                                                <img
                                                    src="http://127.0.0.1:8000/assets/img/logo/logo.png"
                                                    alt="Logo"
                                                    width="200px"
                                                />
                                            </a>
                                        </div>
                                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                            <ul className="navigation">
                                                <li>
                                                    <NavLink to="/student">
                                                        Dashboard
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/student/classroom">
                                                        Kelas
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tgmenu__action">
                                            <ul className="list-wrap">
                                                {isLoggedIn ? (
                                                    <>
                                                        <li className="header-btn login-btn">
                                                            <button
                                                                onClick={
                                                                    handleLogout
                                                                }
                                                                className="btn btn-danger"
                                                            >
                                                                Log out
                                                            </button>
                                                        </li>
                                                    </>
                                                ) : (
                                                    <li className="header-btn login-btn">
                                                        <NavLink to="/login">
                                                            Log in
                                                        </NavLink>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="mobile-login-btn">
                                            <NavLink to="/login">
                                                <img
                                                    src="assets/img/icons/user.svg"
                                                    alt=""
                                                    className="injectable"
                                                />
                                            </NavLink>
                                        </div>
                                        <div className="mobile-nav-toggler">
                                            <i className="tg-flaticon-menu-1"></i>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Router />
        </div>
    );
};

export default RouterDataStudent;
