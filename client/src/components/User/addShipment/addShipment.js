import React from 'react'
import AddShipmentBanner from './addShipmentBanner/addShipmentBanner'
import AddShipmentForm from './addShipmentForm/addShipmentForm'

const AddShipment = () => {
    return (
        <div className="add-shipment">
            <AddShipmentBanner/>
            <AddShipmentForm/>
        </div>
    )
}

export default AddShipment
