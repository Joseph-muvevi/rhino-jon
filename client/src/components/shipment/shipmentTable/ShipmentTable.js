import React, { useEffect, useState } from 'react'
import "../shipment.css"
import axios from "axios"
import TheTable from './table'

const ShipmentTable = () => {

    const [shipment, setShipments] = useState([])

    useEffect(() => {
            axios.get("http://localhost:8080/api/storageshipment")
            // .then((res) => console.log(res.data))
            .then(object => setShipments(object.data))
            .catch(err => console.log(err))
        },
    [])


    return (
        <div className="shipment-table">
            {/* {
                shipment ? shipment.JSON.stringify(shipment) : (
                    <div className="shipment-table-content">
                        <h1 className="shipment-table-header">
                            Nothin here yet
                        </h1>
                        <p className="shipment-table-p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div> 
                )
            } */}
            {shipment ? <TheTable data={shipment}/> : (
                    <div className="shipment-table-content">
                        <h1 className="shipment-table-header">
                            Nothin here yet
                        </h1>
                        <p className="shipment-table-p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div> 
                )}
            {/* {console.log(shipment, "This is from the shipment data")} */}
        </div>
    )
}

export default ShipmentTable
