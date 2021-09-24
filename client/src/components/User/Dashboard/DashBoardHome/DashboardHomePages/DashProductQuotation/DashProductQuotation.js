import React from 'react'
import DashProductQuotationBanner from './DashProductQuotationBanner/DashProductQuotationBanner'
import DashProductQuotationContent from './DashProductQuotationContent/DashProductQuotationContent'

const DashProductQuotation = () => {
    return (
        <div className="dash-general">
            <DashProductQuotationBanner/>
            <DashProductQuotationContent/>
        </div>
    )
}

export default DashProductQuotation
