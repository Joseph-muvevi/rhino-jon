import React from 'react'

const ShipmentCard = ({result}) => {


    return (
        <div className="shipment-card"> 
            <div className="shipment-card-content">
                {
                    result? Object.entries(result).map(([key, value]) => {
                        return <li classNAme="shipment-card-content-li" key={key}>{key} : {value}</li>
                    }) : null
                }
            </div>
        </div>
    )
}

export default ShipmentCard
