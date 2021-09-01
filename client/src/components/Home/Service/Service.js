import React from 'react'
import { Link } from 'react-router-dom'
import "./service.css"

const Services = () => {
    return (
        <div className="home-service">
            <div className="home-service-content">
                {/* <div className="home-service-content-top">
                    <p className="home-service-content-left-p">
                        What we offer
                    </p>     
                    <h3 className="home-service-content-left-header">
                        Header Topic
                    </h3>
                </div> */}
                <div className="home-service-content-content">
                    <div className="home-service-content-left">
                        <div className="home-service-content-left-txt">
                            <p className="home-service-content-left-p">
                                What we do
                            </p>     
                            <h3 className="home-service-content-left-header">
                                Our Services
                            </h3>
                            <Link to="/service-type">
                                <button className="home-home-service-button" >
                                    Request a quote
                                </button>
                            </Link>
                        </div>              
                    </div>
                    <div className="home-service-content-right">
                        <div className="home-service-right-cards">
                            <div className="home-service-right-cards-row">
                                <Link to="/services-logistics" className="home-service-bottom-card-One">
                                    <div className="home-service-image-cards-land"></div>
                                    <h3 className="product-cards-h3">
                                        Land logistics
                                    </h3>
                                    <p className="home-service-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </Link>
                                <Link to="/services-tracking" className="home-service-bottom-card-One">
                                    <div className="home-service-image-cards-tracking"></div>
                                    <h3 className="product-cards-h3">
                                        Cargo Tracking
                                    </h3>
                                    <p className="home-service-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </Link>
                                <Link to="/services-storage" className="home-service-bottom-card-One">
                                    <div className="home-service-image-cards-storage"></div>
                                    <h3 className="product-cards-h3">
                                        Storage
                                    </h3>
                                    <p className="home-service-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </Link>
                            </div>
                            <div className="home-service-right-cards-row">
                                <Link to="/services-advisory" className="home-service-bottom-card-One">
                                    <div className="home-service-image-cards-sea"></div>
                                    <h3 className="product-cards-h3">
                                        Advisory
                                    </h3>
                                    <p className="home-service-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </Link>
                                <Link to="/services-air" className="home-service-bottom-card-One">
                                    <div className="home-service-image-cards-air"></div>
                                    <h3 className="product-cards-h3">
                                        Air Logistics
                                    </h3>
                                    <p className="home-service-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </Link>
                                <Link to="/services-ocean" className="home-service-bottom-card-One">
                                    <div className="home-service-image-cards-sea"></div>
                                    <h3 className="product-cards-h3">
                                        Sea Logistics
                                    </h3>
                                    <p className="home-service-cards-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
