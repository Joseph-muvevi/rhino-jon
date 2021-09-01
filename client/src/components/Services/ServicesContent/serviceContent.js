import React from 'react'
import { Link } from 'react-router-dom'
// import Images from "../../../assets/gold2.jpg"
import "./serviceContent.css"

const ServiceContent = () => {
    return (
        <div className="services">
            <div className="service-content">
                <div className="service-content-bottom">
                    <h3 className="service-content-bottom-h3">
                        Our Services
                    </h3>
                    <div className="service-content-values">
                        <div className="service-content-values-row">
                            <div className="service-content-values-item">
                                <h4 className="service-content-values-h3">
                                    Trading
                                </h4>
                                <p className="service-content-values-p">
                                    We participate heavily in the buying and selling of precious metals &stones. Due to our vast
                                    experience in the field, we have managed to gain direct access to sellers and enjoyed
                                    competive advantage
                                </p>
                            </div>
                            <Link to="/services-air" className="service-content-values-item">
                                <h4 className="service-content-values-h3">
                                    Air Logistics
                                </h4>
                                <p className="service-content-values-p">
                                    Our fleet of individually owned , leased and chartered aircrafts ensure effective
                                    and timely delivery of the precious cargo .Our clients enjoy Goods in Transit
                                    insurance from a “AAA” rated insurance company 
                                </p>
                            </Link>
                            <Link to="/services-ocean" className="service-content-values-item">
                                <h4 className="service-content-values-h3">
                                    Ocean Logistics
                                </h4>
                                <p className="service-content-values-p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled...
                                </p>
                            </Link>
                            <Link to="/services-linkages" className="service-content-values-item">
                                <h4 className="service-content-values-h3">
                                    Linkages
                                </h4>
                                <p className="service-content-values-p">
                                    Over time we have been able to create valuable
                                    relationships with Buyers, Sellers, Refiners etc., and
                                    we are able to provide access to these networks
                                    at an agreed fee.
                                </p>
                            </Link>
                        </div>
                        
                        <div className="service-content-values-row">
                            <Link to="/services-brokerage" className="service-content-values-item">
                                
                                <h4 className="service-content-values-h3">
                                    Custom Brokarage
                                </h4>
                                <p className="service-content-values-p">
                                    From our vast connections with fully licensed
                                    customs brokerage companies, we provide our clients
                                    with dedicated professionals that provide full processing
                                    of customs documents and clearance of goods.
                                </p>
                            </Link>
                            <div className="service-content-values-item">
                                <h4 className="service-content-values-h3">
                                    Trade on Behalf
                                </h4>
                                <p className="service-content-values-p">
                                    At a reasonable pre-negotiated fee we source, inspect, transport and
                                    refine precious stones on behalf of private investors
                                </p>
                            </div>
                            <div className="service-content-values-item">
                                <h4 className="service-content-values-h3">
                                    Co-investment
                                </h4>
                                <p className="service-content-values-p">
                                    In some occasions we partner with investors and conduct business deals as a
                                    team on agreed terms
                                </p>
                            </div>
                            <Link to="/services-advisory" className="service-content-values-item">
                                <h4 className="service-content-values-h3">
                                    Advisory
                                </h4>
                                <p className="service-content-values-p">
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

export default ServiceContent
