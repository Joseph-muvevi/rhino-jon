import React from 'react'
import ShipmentBanner from './shipmentBanner/shipmentBanner'
import ShipmentTable from './shipmentTable/ShipmentTable'

const Shipment = () => {
    return (
        <div className="shipment">
            <ShipmentBanner/>
            <ShipmentTable/>
        </div>
    )
}

export default Shipment
