import React from 'react'
import QuotationBanner from './quotationBanner/quotationBanner'
import QuotationForm from './quotationForm/quotationForm'

const Quotation = () => {
    return (
        <div className="quotation">
            <QuotationBanner/>
            <QuotationForm/>
        </div>
    )
}

export default Quotation
