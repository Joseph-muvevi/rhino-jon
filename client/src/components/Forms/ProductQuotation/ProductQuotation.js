import React from 'react'
import ProductQuotationBanner from './ProductQuotationBanner/ProductQuotationBanner'
import ProductQuotationForm from './ProductQuotationForm/ProductQuotationForm'

const ProductQuotation = () => {
    return (
        <div className="product-quotation">
            <ProductQuotationBanner/>
            <ProductQuotationForm/>
        </div>
    )
}

export default ProductQuotation
