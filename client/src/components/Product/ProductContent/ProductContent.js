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
                                <h4 className="product-content-values-h3">
                                    Military
                                </h4>
                                <p className="product-content-values-p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but
                                    also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <Link to="/services-air" className="product-content-values-item">
                                <h4 className="product-content-values-h3">
                                    Air Logistics
                                </h4>
                                <p className="product-content-values-p">
                                    Our fleet of individually owned , leased and chartered aircrafts ensure effective
                                    and timely delivery of the precious cargo .Our clients enjoy Goods in Transit
                                    insurance from a “AAA” rated insurance company 
                                </p>
                            </Link>
                            <Link to="/services-ocean" className="product-content-values-item">
                                <h4 className="product-content-values-h3">
                                    Ocean Logistics
                                </h4>
                                <p className="product-content-values-p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled...
                                </p>
                            </Link>
                            <Link to="/services-linkages" className="product-content-values-item">
                                <h4 className="product-content-values-h3">
                                    Linkages
                                </h4>
                                <p className="product-content-values-p">
                                    Over time we have been able to create valuable
                                    relationships with Buyers, Sellers, Refiners etc., and
                                    we are able to provide access to these networks
                                    at an agreed fee.
                                </p>
                            </Link>
                        </div>
                        
                        <div className="product-content-values-row">
                            <Link to="/services-brokerage" className="product-content-values-item">
                                <h4 className="product-content-values-h3">
                                    Custom Brokarage
                                </h4>
                                <p className="product-content-values-p">
                                    From our vast connections with fully licensed
                                    customs brokerage companies, we provide our clients
                                    with dedicated professionals that provide full processing
                                    of customs documents and clearance of goods.
                                </p>
                            </Link>
                            <div className="product-content-values-item">
                                <h4 className="product-content-values-h3">
                                    Trade on Behalf
                                </h4>
                                <p className="product-content-values-p">
                                    At a reasonable pre-negotiated fee we source, inspect, transport and
                                    refine precious stones on behalf of private investors
                                </p>
                            </div>
                            <div className="product-content-values-item">
                                <h4 className="product-content-values-h3">
                                    Co-investment
                                </h4>
                                <p className="product-content-values-p">
                                    In some occasions we partner with investors and conduct business deals as a
                                    team on agreed terms
                                </p>
                            </div>
                            <Link to="/services-advisory" className="product-content-values-item">
                                <h4 className="product-content-values-h3">
                                    Advisory
                                </h4>
                                <p className="product-content-values-p">
                                    We have a team of experts who diligently address any challenges you are facing in the value
                                    chain including but not limited to testing, market research and quality control.
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default productContent
