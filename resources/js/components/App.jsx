import React from "react";
import Router from "../router/Index";
import { NavLink } from "react-router-dom";

const App = () => {
    return (
        <div>
            <header>
                <div className="tg-header__top">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="tg-header__top-info list-wrap">
                                    <li>
                                        <img src="assets/img/icons/map_marker.svg" alt="Icon" />
                                        <span>589 5th Ave, NY 10024, USA</span>
                                    </li>
                                    <li>
                                        <img src="assets/img/icons/envelope.svg" alt="Icon" />
                                        <a href="mailto:info@skillgrodemo.com">info@skillgrodemo.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="tg-header__top-right">
                                    <div className="tg-header__phone">
                                        <img src="assets/img/icons/phone.svg" alt="Icon" />
                                        Call us: <a href="tel:0123456789">+123 599 8989</a>
                                    </div>
                                    <ul className="tg-header__top-social list-wrap">
                                        <li>Follow Us On:</li>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
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
                                        <a href="index-2.html">
                                            <img 
                                            src="assets/img/logo/logo.jpeg" 
                                            alt="Logo" 
                                            style={{ width: '200px', height: 'auto' }} 
                                            />
                                        </a>
                                        </div>
                                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                            <ul className="navigation">
                                                <li className="active">
                                                    <NavLink to="about">About</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tgmenu__search d-none d-md-block">
                                            <form action="#" className="tgmenu__search-form">
                                                <div className="select-grp">
                                                    <select className="form-select" id="course-cat" aria-label="Default select example" style={{ width: '150px' }}>
                                                        <option selected disabled>Categories</option>
                                                        <option value="1">Business</option>
                                                        <option value="2">Data Science</option>
                                                        <option value="3">Art & Design</option>
                                                        <option value="4">Marketing</option>
                                                        <option value="5">Finance</option>
                                                    </select>
                                                </div>
                                                <div className="input-grp">
                                                    <input type="text" placeholder="Search For Course . . ." />
                                                    <button type="submit"><i className="flaticon-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="tgmenu__action">
                                            <ul className="list-wrap">
                                                <li className="wishlist-icon">
                                                    <a href="cart.html" className="cart-count">
                                                        <img src="assets/img/icons/heart.svg" className="injectable" alt="img" />
                                                        <span className="wishlist-count">0</span>
                                                    </a>
                                                </li>
                                                <li className="mini-cart-icon">
                                                    <a href="cart.html" className="cart-count">
                                                        <img src="assets/img/icons/cart.svg" className="injectable" alt="img" />
                                                        <span className="mini-cart-count">0</span>
                                                    </a>
                                                </li>
                                                <li className="header-btn login-btn">
                                                    <a href="login.html">Log in</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mobile-login-btn">
                                            <a href="login.html"><img src="assets/img/icons/user.svg" alt="" className="injectable" /></a>
                                        </div>
                                        <div className="mobile-nav-toggler"><i className="tg-flaticon-menu-1"></i></div>
                                    </nav>
                                </div>

                                {/* Mobile Menu  */}
                                <div className="tgmobile__menu">
                                    <nav className="tgmobile__menu-box">
                                        <div className="close-btn"><i className="tg-flaticon-close-1"></i></div>
                                        <div className="nav-logo">
                                            <a href="index-2.html"><img src="assets/img/logo/logo.svg" alt="Logo" /></a>
                                        </div>
                                        <div className="tgmobile__search">
                                            <form action="#">
                                                <input type="text" placeholder="Search here..." />
                                                <button><i className="fas fa-search"></i></button>
                                            </form>
                                        </div>
                                        <div className="tgmobile__menu-outer">
                                            {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
                                        </div>
                                        <div className="social-links">
                                            <ul className="list-wrap">
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="tgmobile__menu-backdrop"></div>
                                {/* End Mobile Menu */}
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
