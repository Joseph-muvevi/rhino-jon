import React from 'react'
import ProductBanner from './ProductBanner/ProductBanner'
import ProductContent from './ProductContent/ProductContent'
import ProductFooter from './ProductFooter/ProductFooter'

const Product = () => {
    return (
        <div className="service">
            <ProductBanner/>
            <ProductContent/>
            <ProductFooter/>
        </div>
    )
}

export default Product
