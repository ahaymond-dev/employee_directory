import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/new" className={location.pathname === "/new" ? "nav-link active" : "nav-link"}>
                    New Employee
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs;