import React from 'react'
// import "./adminstoragetable.css"

const AdminLogisticsTableHeaders = () => {
    return (
        <div className="admin-storage-table-header">
            <div className="admin-storage-table-header-content">
                <p className="admin-storage-table-header">
                    #
                </p>
                <p className="admin-storage-table-header">
                    Tracking No
                </p>
                <p className="admin-storage-table-header">
                    Client
                </p>
                <p className="admin-storage-table-header">
                    ID
                </p>
                <p className="admin-storage-table-header">
                    Address
                </p>
                <p className="admin-storage-table-header">
                    Product
                </p>
                <p className="admin-storage-table-header">
                    Quality
                </p>
                <p className="admin-storage-table-header">
                    Unit
                </p>
                <p className="admin-storage-table-header">
                    Packaging
                </p>
                <p className="admin-storage-table-header">
                    Weight
                </p>
                <p className="admin-storage-table-header">
                    Date in
                </p>
                <p className="admin-storage-table-header">
                    Date out
                </p>
            </div>
        </div>
    )
}

export default AdminLogisticsTableHeaders
