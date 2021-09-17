import React, {useState, useEffect} from 'react'
import axios from "axios"
import AdminLogisticsTableContent from './AdminLogisticsTableContent'

const AdminStorageTable = () => {

    const [adminStorage, setAdminStorage] = useState([])


    // const getAdminStorageData = () => {
    //     axios.get(`http://localhost:8080/api/logisticsrecords`)
    //         .then(res => {
    //             // setAdminStorage(res.data)
    //             const data = res.data
    //             console.log("this is the res information from adminstorage", data)
    //             // setAdminStorage(data)
    //         })
    //         .catch(err => console.log(err))
    // }

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
                    adminStorage ? <AdminLogisticsTableContent storage={adminStorage} /> : null
                }
                
            </div>
        </div>
    )
}

export default AdminStorageTable
