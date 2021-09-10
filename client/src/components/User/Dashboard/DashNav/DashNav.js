import React from 'react'
import {NavLink} from "react-router-dom"
import "../dashboard.css"

const DashNav = () => {
    return (
        <div className="dash-nav">
            <div className="dash-nav-ul">
                <NavLink to="/dashboard/home" className="dash-nav-li">Dashboard</NavLink>
                <NavLink to="/dashboard/analitics" className="dash-nav-li">Analitics</NavLink>
                <NavLink to="" className="dash-nav-li">Tables</NavLink>
                <NavLink to="" className="dash-nav-li">Forms</NavLink>
                <NavLink to="" className="dash-nav-parent-li">
                    <div className="dash-nav-sub-ul">
                        <NavLink to="" className="dash-nav-sub-li">Add Storage</NavLink>
                        <NavLink to="" className="dash-nav-sub-li">Add Shipment</NavLink>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default DashNav
