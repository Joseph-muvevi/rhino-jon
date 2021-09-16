import { faAddressBook, faGem, faHeadphones, faHome, faMarker, faShippingFast } from '@fortawesome/free-solid-svg-icons'
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
                    <NavLink className="navbar-li" to="/">
                        <FontAwesomeIcon icon={faHome}/>
                        <div className="nav-trigger">
                            Home
                        </div>
                    </NavLink>
                    <NavLink className="navbar-li" to="/about">
                        <FontAwesomeIcon icon={faAddressBook}/>
                        <div className="nav-trigger">
                            About
                        </div>
                    </NavLink>
                    <NavLink className="navbar-li" to="/products">
                        <FontAwesomeIcon icon={faGem}/>
                        <div className="nav-trigger">
                            Products
                        </div>
                    </NavLink>
                    <NavLink className="navbar-li" to="/services">
                        <FontAwesomeIcon icon={faShippingFast}/>
                        <div className="nav-trigger">
                            Services
                        </div>
                    </NavLink>
                    <NavLink className="navbar-li" to="/shipment">
                        <FontAwesomeIcon icon={faMarker}/>
                        <div className="nav-trigger">
                            Track
                        </div>
                    </NavLink>
                    <NavLink className="navbar-li" to="/contact">
                        <FontAwesomeIcon icon={faHeadphones}/>
                        <div className="nav-trigger">
                            Contact
                        </div>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
