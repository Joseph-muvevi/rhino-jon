import React, {useState, useEffect} from 'react'
import axios from "axios"
import AdminStorageContentTableCard from './AdminStorageContentTableCard'

const AdminStorageTable = () => {

    const [adminStorage, setAdminStorage] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:8080/api/logisticsrecords`)
        .then(res => {
            console.log(res.data)
            setAdminStorage(res.data)
            console.log("data from admin storage", adminStorage)
         
        })
        .catch(err => console.log(err))
    }, [])

    console.log(adminStorage, "in the body")
    
    return (
        <div className="admin-storage-table">
            <div className="admin-storage-table-content">
                
                {
                    adminStorage ? <AdminStorageContentTableCard storage={adminStorage} /> : null
                }
                
            </div>
        </div>
    )
}

export default AdminStorageTable
