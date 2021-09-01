import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../assets/Rhino card logo - PNG.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <img src={logo} alt="Rhino Jon logo" className="navbar-logo"/>
                <ul className="navbar-ul">
                    <NavLink className="navbar-li" to="/">Home</NavLink>
                    <NavLink className="navbar-li" to="/about">About</NavLink>
                    <NavLink className="navbar-li" to="/products">Products</NavLink>
                    <NavLink className="navbar-li" to="/services">Services</NavLink>
                    <NavLink className="navbar-li" to="/contact">Contact</NavLink>
                    <NavLink className="navbar-li" to="/auth"><FontAwesomeIcon icon={faLock}/> Login</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
