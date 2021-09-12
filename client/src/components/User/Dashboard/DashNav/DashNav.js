import React from 'react'
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome,faChartPie, faTable, faFolderMinus} from '@fortawesome/free-solid-svg-icons'
import "../dashboard.css"

const DashNav = () => {
    return (
        <div className="dash-nav">
            <div className="dash-nav-ul">
                <NavLink to="/dashboard/home" className="dash-nav-li">
                    <div className="dash-nav-li-items">
                        <FontAwesomeIcon icon={faHome} />
                        Home
                    </div>
                </NavLink>
                <NavLink to="/dashboard/analitics" className="dash-nav-li">
                    <div className="dash-nav-li-items">
                        <FontAwesomeIcon icon={faChartPie} />
                        Analitics
                    </div>
                </NavLink>
                <NavLink to="/dashboard/tables" className="dash-nav-li">
                    <div className="dash-nav-li-items">
                        <FontAwesomeIcon icon={faTable} />
                        Tables
                    </div>
                </NavLink>
                <NavLink to="/dashboard/forms" className="dash-nav-li">
                    <div className="dash-nav-li-items">
                        <FontAwesomeIcon icon={faFolderMinus} />
                        Forms
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default DashNav
