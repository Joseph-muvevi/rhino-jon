import React from 'react'
import ServiceTypesBanner from './ServiceTypeBanner/ServiceTypeBanner'
import ServiceTypes from './ServiceTypes/ServiceTypes'

const ServiceType = () => {
    return (
        <div className="service-type">
            <ServiceTypesBanner/>
            <ServiceTypes/>
        </div>
    )
}

export default ServiceType
