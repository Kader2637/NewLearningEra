import React from "react";

const NavHeaderTeacher = () => {
    return (
        <div className="nav-header">
            <a href="index.html" className="brand-logo">
                <div className="logo-abbr">
                    <img src="logo.png" width="50px" alt="" srcset="" />
                </div>
                <img
                    className="logo-compact"
                    src="images/logo-text.png"
                    alt="Brand Logo"
                />
                <div className="brand-title">
                    <h3  className="mt-3 text-dark">Teacher</h3>
                </div>
            </a>
            <div className="nav-control">
                <div className="hamburger">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </div>
    );
};

export default NavHeaderTeacher;
