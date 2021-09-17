import React from 'react'
import ShipmentTableHeader from './ShipmentTableHeader'
import ShipmentTableContent from './ShipmentTableContent'
// import StorageTableHeader from '../StorageTable/StorageTableHeader'

const ShipmentCard = ({result}) => {

    let results = result
    // const entries = Object.entries(results)
    let length

    if (results){
        length = results.length 
    }

    console.log("the length is",length)
    console.log("these are the results from shipment card", results)

    return (
        <div className="shipment-card"> 
            <div className="shipment-card-content">
                <ShipmentTableHeader headers = {results}/>
                {
                    [1,2,3,4].map(() => (
                        <ShipmentTableContent/>
                    ))
                }
            </div>
        </div>
    )
}

export default ShipmentCard
