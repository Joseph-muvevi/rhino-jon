import React from 'react'
import "./adminstoragetable.css"
import AdminStorageTableContent from './AdminStorageTableContent'
import AdminStorageTableHeaders from './AdminStorageTableHeaders'

const AdminStorageContentTableCard = ({storage}) => {
    const storageItems = storage
    console.log("Storage items in admin", storageItems)
    
    let keys = storageItems.map(entr => {
        console.log(Object.keys(storageItems, "mapping through these"))
    })
    console.log(keys)

    return (
        <div className="admin-storage-table-card">
            {
                storageItems ? (
                    <>
                        <AdminStorageTableHeaders/>
                        <AdminStorageTableContent/>
                    </>
                ) : <p> Items doesn't exist yet </p>
            }
        </div>
    )
}

export default AdminStorageContentTableCard
