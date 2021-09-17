import React from 'react'
import "./adminstoragetable.css"
import AdminStorageTableContent from './AdminStorageTableContent'
import AdminLogisticsTableHeader from './AdminLogisticsTableHeader'

const AdminStorageContentTableCard = ({storage}) => {
    const storageItems = storage
    console.log("Storage items in admin", storageItems)
    // const entries = Object.entries(storageItems)
    // const objLength = Object.keys(storageItems)
    // const values = Object.values(storageItems)
    
    let keys = storageItems.map(entr => {
        console.log(Object.keys(storageItems, "mapping through these"))
    })
    console.log(keys)

    return (
        <div className="admin-storage-table-card">
            {
                storageItems ? (
                    <>
                        <AdminLogisticsTableHeader/>
                        <AdminStorageTableContent/>
                    </>
                ) : <p> Items doesn't exist yet </p>
            }
        </div>
    )
}

export default AdminStorageContentTableCard
