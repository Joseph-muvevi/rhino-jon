import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <h3 className="navbar-logo">
                    LOGO
                </h3>
                <ul className="navbar-ul">
                    <NavLink className="navbar-li" to="/">Home</NavLink>
                    <NavLink className="navbar-li" to="/about">About</NavLink>
                    <NavLink className="navbar-li" to="/services">Services</NavLink>
                    <NavLink className="navbar-li" to="/contact">Contact</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
