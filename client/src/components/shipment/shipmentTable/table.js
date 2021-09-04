import React from 'react'
import "../shipment.css"

const TheTable = ({data}) => {
    // getKeys

    const shipments = [data]

    const sort = shipments.sort(function(a, b){
        return b.createdAt - a.createdAt
    })
    console.log(sort, "this is a sort statement")

    return (
        <div className="the-table">
            {/* {alert(JSON.stringify(data))} */}
            {console.log(shipments, "this os from the table data")}
        </div>
    )
}

export default TheTable
