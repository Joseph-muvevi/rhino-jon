import React from 'react'
import "./adminstoragetable.css"
import AdminStorageTableContent from './AdminStorageTableContent'
import AdminStorageTableHeaders from './AdminStorageTableHeaders'

const AdminStorageContentTableCard = ({storage}) => {
    const storageItems = storage
    console.log("Storage items in admin", storageItems)

    return (
        <div className="admin-storage-table-card">
            <AdminStorageTableHeaders/>
            {
                storageItems ? storageItems.map((object) => (
                    <>
                        <AdminStorageTableContent content = {object}/>
                    </>
                ) ) : <p> Items doesn't exist yet </p>
            }
        </div>
    )
}

export default AdminStorageContentTableCard
