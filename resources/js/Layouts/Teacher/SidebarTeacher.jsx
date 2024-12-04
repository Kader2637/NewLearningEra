import React from "react";
import { NavLink } from "react-router-dom";

const SidebarTeacher = () => {
    return (
        <div className="dlabnav">
            <div className="dlabnav-scroll">
                <ul className="metismenu" id="menu">
                    <li>
                        <NavLink
                            href="/admin"
                            className="ai-icon"
                            aria-expanded="false"
                        >
                            <i className="flaticon-381-networking"></i>
                            <span className="nav-text">Dashboard</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SidebarTeacher;
