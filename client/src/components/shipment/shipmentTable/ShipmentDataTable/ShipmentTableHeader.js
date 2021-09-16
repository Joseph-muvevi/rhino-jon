import React from 'react'
import "../../shipment.css"

const ShipmentTableHeader = ({headers}) => {
    const header = headers
    console.log("Information from storage table header",header)
    return (
        <div className="storage-table-headers">
           <div className="storage-tabe-headers-left">
                <div className="storage-table-headers-body">
                    <p className="storage-table-headers-p">
                        Track number
                    </p>
                    <p className="storage-table-headers-p">
                        Latest notes here
                    </p>
                </div>
           </div>
           <div className="storage-tabe-headers-middle">
                <div className="storage-table-headers-body">
                    <p className="storage-table-headers-p">
                        Latest day
                    </p>
                    <p className="storage-table-headers-p">
                        Original service area : latest departure
                    </p>
                    <p className="storage-table-headers-p">
                        Destination service area : latest arrival
                    </p>
                </div>
           </div>
           <div className="storage-tabe-headers-right">
            <div className="storage-table-headers-body">
                    <p className="storage-table-headers-p">
                        Estimated delivery : estimated date
                    </p>
                </div>
           </div>
        </div>
    )
}

export default ShipmentTableHeader
