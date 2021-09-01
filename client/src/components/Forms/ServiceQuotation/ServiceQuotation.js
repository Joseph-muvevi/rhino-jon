import React from 'react'
import ServiceQuotationBanner from './ServiceQuotationBanner/ServiceQuotationBanner'
import StorageQuotationForm from './StorageQuotationForm/StorageQuotationForm'

const ServiceQuotation = () => {
    return (
        <div>
            <ServiceQuotationBanner/>
            <StorageQuotationForm/>
        </div>
    )
}

export default ServiceQuotation
