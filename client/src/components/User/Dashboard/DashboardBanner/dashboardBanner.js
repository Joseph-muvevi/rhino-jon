import React from 'react'
import { Link } from 'react-router-dom'
import "./dashboardBanner.css"

const DashboardBanner = () => {
    return (
        <div className="dashboard-banner">
            <div className="dashboard-banner-content">
                <h3 className="dashboard-banner-h3">
                    Hello [user]
                </h3>
                <p className="dashboard-banner-p">
                    Welcome to your dashboard [user]
                </p>
                <Link to="/addshipment">
                    <button>
                        Add a shipment
                    </button> 
                </Link>
            </div>
        </div>
    )
}

export default DashboardBanner
