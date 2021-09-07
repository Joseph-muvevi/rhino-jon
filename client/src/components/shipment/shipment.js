import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShipmentBanner from './shipmentBanner/ShipmentBanner'
import ShipmentTable from './shipmentTable/ShipmentTable'

const Shipment = () => {
    return (
        <div className="shipment">
            <Navbar/>
            <ShipmentBanner/>
            <ShipmentTable/>
        </div>
    )
}

export default Shipment
