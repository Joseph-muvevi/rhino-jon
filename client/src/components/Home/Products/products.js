import React from 'react'
import { Link } from 'react-router-dom'
import "./products.css"

const Products = () => {
    return (
        <div className="products">
            <div className="products-content">
                {/* <div className="products-content-top">
                    <p className="products-content-left-p">
                        What we offer
                    </p>     
                    <h3 className="products-content-left-header">
                        Header Topic
                    </h3>
                </div> */}
                <div className="products-content-content">
                    <div className="products-content-left">
                        <div className="products-content-left-txt">    
                            <h3 className="products-content-left-header">
                                Our products
                            </h3>
                            <Link to="/product-quotation">
                                <button className="products-button">
                                    Request a quote
                                </button>
                            </Link>
                        </div>              
                    </div>
                    <div className="products-content-right">
                        <div className="products-right-cards">
                            <div className="products-right-cards-row">
                                <Link to="/products-metals" className="products-bottom-card-One">
                                    <div className="products-card-image-metal"></div>
                                    <h3 className="product-cards-h3">
                                        Metals/Minerals
                                    </h3>
                                    <p className="products-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </Link>
                                <Link to="/products-medicals" className="products-bottom-card-One">
                                    <div className="products-card-image-medicals"></div>
                                    <h3 className="product-cards-h3">
                                        Medicals
                                    </h3>
                                    <p className="products-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </Link>
                                <Link to="/products-military" className="products-bottom-card-One">
                                    <div className="products-card-image-medicals"></div>
                                    <h3 className="product-cards-h3">
                                        Millitary
                                    </h3>
                                    <p className="products-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </Link>
                            </div>
                            <div className="products-right-cards-row">
                                <Link to="/products-cooling" className="products-bottom-card-One">
                                    <div className="products-card-image-cooling"></div>
                                    <h3 className="product-cards-h3">
                                        Cooling
                                    </h3>
                                    <p className="products-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </Link>
                                <div className="products-bottom-card-One">
                                    <div className="products-card-image-medicals"></div>
                                    <h3 className="product-cards-h3">
                                        Medicals
                                    </h3>
                                    <p className="products-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </div>
                                <div className="products-bottom-card-One">
                                    <div className="products-card-image-medicals"></div>
                                    <h3 className="product-cards-h3">
                                        Millitary
                                    </h3>
                                    <p className="products-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
