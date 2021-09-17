import React from 'react'
import "./adminlogisticstable.css"

const AdminLogisticsTableHeaders = () => {
    return (
        <div className="admin-logistics-table-header">
            <div className="admin-logistics-table-header-content">
                <p className="admin-logistics-table-header">
                    #
                </p>
                <p className="admin-logistics-table-header">
                    Tracking No
                </p>
                <p className="admin-logistics-table-header">
                    Names
                </p>
                <p className="admin-logistics-table-header">
                    Products
                </p>
                <p className="admin-logistics-table-header">
                    Address
                </p>
                <p className="admin-logistics-table-header">
                    Weight
                </p>
                <p className="admin-logistics-table-header">
                    City departed
                </p>
                <p className="admin-logistics-table-header">
                    Country departed
                </p>
                <p className="admin-logistics-table-header">
                    Destination city
                </p>
                <p className="admin-logistics-table-header">
                    Destination country
                </p>
                <p className="admin-logistics-table-header">
                    Status
                </p>
            </div>
        </div>
    )
}

export default AdminLogisticsTableHeaders
