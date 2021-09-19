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
                   <div className="dashboard-banner-buttons">
                        <Link to="/dashboard/logistics-form">
                            <button>Add shipment</button>
                        </Link>
                        <Link to="/dashboard/logistics/edit/logisticsform">
                            <button>Edit shipment</button>
                        </Link>
                        <Link to="/dashboard/logistics-form">
                            <button>Add storage</button>
                        </Link>
                        <Link to="/dashboard/storage/edit/storageform">
                            <button>Edit storage</button>
                        </Link>
                   </div>
                </div>
            </div>
            <div className="dashboard-banner-short">
            </div>
        </div>
    )
}

export default DashboardBanner
