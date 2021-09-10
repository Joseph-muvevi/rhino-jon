import React from 'react'
import { Link } from 'react-router-dom'
import "../dashboard.css"

const DashboardBanner = () => {
    return (
        <div className="dashboard-banner">
            <div className="dashboard-banner-long">
                <div className="dashboard-banner-long-content">
                    <h3 className="dashboard-banner-long-content-h3">
                        Lorem big
                    </h3>
                    <p className="dashboard-banner-long-content-p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                    </p>
                    <Link to="/">
                        <button>Homepage</button>
                    </Link>
                </div>
            </div>
            <div className="dashboard-banner-short">

            </div>
        </div>
    )
}

export default DashboardBanner
