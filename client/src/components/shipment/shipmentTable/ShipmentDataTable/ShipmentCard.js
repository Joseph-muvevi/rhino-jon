import React from 'react'
import ShipmentTableHeader from './ShipmentTableHeader'
import ShipmentTableContent from './ShipmentTableContent'
// import StorageTableHeader from '../StorageTable/StorageTableHeader'

const ShipmentCard = ({result}) => {

    let results = result

    console.log(results)

    return (
        <div className="shipment-card"> 
            <div className="shipment-card-content">
                <ShipmentTableHeader headers = {results}/>
                <ShipmentTableContent/>
            </div>
        </div>
    )
}

export default ShipmentCard
