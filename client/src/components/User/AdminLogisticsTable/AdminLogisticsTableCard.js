import React from 'react'
import "./adminlogisticstable.css"
import AdminLogisticsTableContent from './AdminLogisticsTableContent'
import AdminLogisticsTableHeader from './AdminLogisticsTableHeader'

const AdminLogisticsContentTableCard = ({logistics}) => {
    const logisticsItems = logistics
    console.log( logisticsItems)


    return (
        <div className="admin-logistics-table-card">
            {
                logisticsItems ? (
                    <>
                        <AdminLogisticsTableHeader/>
                        {
                            logisticsItems ? logisticsItems.map(item => (
                                <>
                                    <AdminLogisticsTableContent data = {item} /> 
                                </>
                            )) : <p>No items yet</p>
                        }
                    </>
                ) : <p> Items doesn't exist yet </p>
            }
        </div>
    )
}

export default AdminLogisticsContentTableCard
