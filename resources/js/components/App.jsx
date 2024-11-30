import React, { useEffect, useState } from "react";
import Router from "../router/Index";
import { NavLink } from "react-router-dom";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
    };
    return (
        <div>
            <header>
                <div className="tg-header__top">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="tg-header__top-info list-wrap">
                                    <li>
                                        <img
                                            src="http://127.0.0.1:8000/assets/img/icons/map_marker.svg"
                                            alt="Icon"
                                        />
                                        <span>Kota Malang, Jawa Timur</span>
                                    </li>
                                    <li>
                                        <img
                                            src="assets/img/icons/envelope.svg"
                                            alt="Icon"
                                        />
                                        <a href="mailto:info@skillgrodemo.com">
                                            TrioOfInnovator@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="tg-header__top-right">
                                    <div className="tg-header__phone">
                                        <img
                                            src="assets/img/icons/phone.svg"
                                            alt="Icon"
                                        />
                                        Hubungi:{" "}
                                        <a href="0987654321">+62 0987654321</a>
                                    </div>
                                    <ul className="tg-header__top-social list-wrap">
                                        <li>Follow Us On:</li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-whatsapp"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="header-fixed-height"></div>
                <div id="sticky-header" className="tg-header__area">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tgmenu__wrap">
                                    <nav className="tgmenu__nav">
                                        <div className="logo">
                                            <NavLink to="/">
                                                <img
                                                    src="assets/img/logo/logo.png"
                                                    alt="Logo"
                                                    width="200px"
                                                />
                                            </NavLink>
                                        </div>
                                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                            <ul className="navigation">
                                                <li>
                                                    <NavLink to="/" end>
                                                        Dashboard
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/about">
                                                        Tentang Kami
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/course">
                                                        Kelas
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tgmenu__action">
                                            <ul className="list-wrap">
                                                {isLoggedIn ? (
                                                    <li className="header-btn login-btn">
                                                        <button
                                                            onClick={handleLogout}
                                                            className="btn btn-danger"
                                                        >
                                                            Log out
                                                        </button>
                                                    </li>
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
                                            <a href="login.html">
                                                <img
                                                    src="assets/img/icons/user.svg"
                                                    alt=""
                                                    className="injectable"
                                                />
                                            </a>
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

export default App;
