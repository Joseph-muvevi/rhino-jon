import React from 'react'
import "../shipment.css"

const ShipmentBanner = () => {
    return (
        <div className="shipment-banner">
            <div className="shipment-banner-content">
                <div className="shipment-banner-content-group">
                    <h3 className="shipment-banner-h3">
                        Track your shipment
                    </h3>
                    <input type="search" placeholder="Search your shipment here..." name="shipment"/>
                </div>
                <p className="shipment-banner-p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
            </div>
        </div>
    )
}

export default ShipmentBanner
