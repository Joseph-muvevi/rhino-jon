import React from 'react'
import { Link } from 'react-router-dom'
import "../product.css"

const productContent = () => {
    return (
        <div className="products">
            <div className="product-content">
                <div className="product-content-bottom">
                    <h3 className="product-content-bottom-h3">
                        Our products
                    </h3>
                    <div className="product-content-values">
                        <div className="product-content-values-row">
                            <div className="product-content-values-item">
                                <div className="product-content-card-image-one">

                                </div>
                                <h4 className="product-content-values-h3">
                                    Military
                                </h4>
                                <p className="product-content-values-p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                                </p>
                            </div>
                            <Link to="/services-air" className="product-content-values-item">
                                <div className="product-content-card-image-two">
                                
                                </div>
                                <h4 className="product-content-values-h3">
                                    Minerals/metals
                                </h4>
                                <p className="product-content-values-p">
                                    Our fleet of individually owned , leased and chartered aircrafts ensure effective
                                    and timely delivery of the precious cargo ...
                                </p>
                            </Link>
                            <Link to="/services-ocean" className="product-content-values-item">
                                <div className="product-content-card-image-three">
                                
                                </div>
                                <h4 className="product-content-values-h3">
                                    Medicals/Medicine
                                </h4>
                                <p className="product-content-values-p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's...
                                </p>
                            </Link>
                            <Link to="/services-linkages" className="product-content-values-item">
                                <div className="product-content-card-image-four">
                                    
                                </div>
                                <h4 className="product-content-values-h3">
                                    Autileries
                                </h4>
                                <p className="product-content-values-p">
                                    Over time we have been able to create valuable
                                    relationships with Buyers, Sellers, Refiners etc., and...
                                </p>
                            </Link>
                        </div>
                        
                        <div className="product-content-values-row">
                            <Link to="/services-brokerage" className="product-content-values-item">
                                <div className="product-content-card-image-five">
                                    
                                    </div>
                                <h4 className="product-content-values-h3">
                                    Custom Brokarage
                                </h4>
                                <p className="product-content-values-p">
                                    From our vast connections with fully licensed
                                    customs brokerage companies, we provide our clients...
                                </p>
                            </Link>
                            <div className="product-content-values-item">
                                <div className="product-content-card-image-six">
                                    
                                </div>
                                <h4 className="product-content-values-h3">
                                    Trade on Behalf
                                </h4>
                                <p className="product-content-values-p">
                                    At a reasonable pre-negotiated fee we source, inspect, transport and
                                    refine precious stones on behalf of private investors...
                                </p>
                            </div>
                            <div className="product-content-values-item">
                                <div className="product-content-card-image-seven">
                                    
                                </div>
                                <h4 className="product-content-values-h3">
                                    Co-investment
                                </h4>
                                <p className="product-content-values-p">
                                    In some occasions we partner with investors and conduct business deals as a
                                    team on agreed terms...
                                </p>
                            </div>
                            <Link to="/services-advisory" className="product-content-values-item">
                                <div className="product-content-card-image-eight">
                                    
                                </div>
                                <h4 className="product-content-values-h3">
                                    Advisory
                                </h4>
                                <p className="product-content-values-p">
                                    We have a team of experts who diligently address any challenges you are facing in the value
                                    chain...
                                </p>
                            </Link>
                        </div>
                        <Link to="/product-quotation">
                            <button className="product-content-button">
                                Request a quote
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default productContent
