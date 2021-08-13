import React from 'react'
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
            </div>
        </div>
    )
}

export default DashboardBanner
