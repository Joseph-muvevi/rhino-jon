import React from 'react'
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
                            <p className="products-content-left-p">
                             Our Product
                            </p>     
                            <h3 className="products-content-left-header">
                                Header Topic
                            </h3>
                        </div>              
                    </div>
                    <div className="products-content-right">
                        <div className="products-right-cards">
                            <div className="products-right-cards-row">
                                <div className="products-bottom-card-One">
                                    <h3 className="product-cards-h3">
                                        Metals/Minerals
                                    </h3>
                                    <p className="products-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </div>
                                <div className="products-bottom-card-One">
                                    <h3 className="product-cards-h3">
                                        Medicals
                                    </h3>
                                    <p className="products-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </div>
                                <div className="products-bottom-card-One">
                                    <h3 className="product-cards-h3">
                                        Millitary
                                    </h3>
                                    <p className="products-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </div>
                            </div>
                            <div className="products-right-cards-row">
                                <div className="products-bottom-card-One">
                                    <h3 className="product-cards-h3">
                                        Metals/Minerals
                                    </h3>
                                    <p className="products-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </div>
                                <div className="products-bottom-card-One">
                                    <h3 className="product-cards-h3">
                                        Medicals
                                    </h3>
                                    <p className="products-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </div>
                                <div className="products-bottom-card-One">
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
