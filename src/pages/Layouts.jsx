import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './layouts.css'; // Import the CSS file for styles

function Layouts() {
    return (
        <>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Contacts
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/icon" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Icon
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}

export default Layouts;
