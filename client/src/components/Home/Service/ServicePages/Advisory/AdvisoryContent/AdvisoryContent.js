import React from 'react'
import "../Advisory.css"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentsDollar, faFileAlt, faPlaneDeparture, faShip, faShippingFast, faWarehouse } from '@fortawesome/free-solid-svg-icons'

const AdvisoryContent = () => {
    return (
        <div className="advisory-content">
            <div className="advisory-content-content">
                <div className="advisory-content-content-content">
                    <div className="advisory-content-content-left">
                        <div className="advisory-content-content-left-txt">
                           
                        </div>              
                    </div>
                    <div className="advisory-content-content-right">
                        <div className="advisory-content-right-cards">
                            <p className="advisory-content-right-cards-row">
                                We have succeeded in establishing, over the years, a system of partnership with 
                                the various actors and stakeholders in the mining sector in Africa, mainly those
                                 operating in countries with significant mining reserves and operating mines. 
                                 Among these actors, we find artisanal miners, small and medium scale production 
                                 mines and mining cooperatives. The other players are traders and commission agents.

                            </p>
                            <p className="advisory-content-right-cards-row">
                                We organized ourselves and gained notoriety as an agency for facilitating 
                                commercial contracts between sellers and buyers of mining products.
                            </p>
                            <p className="advisory-content-right-cards-row">
                                At a reasonable pre-negotiated fee we source, inspect, transport and
                                refine precious stones on behalf of private investors.
                            </p>
                            <Link to="/product-quotation-form">
                                <button className="advisory-content-button">
                                    Request a quote
                                </button>
                            </Link>
                        </div>
                    <div className="service-fontawesome-div">
                        <Link to="/services-trade" className="service-fontawesome-icon">
                            <FontAwesomeIcon size="2x" icon={faCommentsDollar} />
                        </Link>
                        <Link to="/services-air" className="service-fontawesome-icon">
                            <FontAwesomeIcon size="2x" icon={faPlaneDeparture} />
                        </Link>
                        <Link to="/services-ocean" className="service-fontawesome-icon">
                            <FontAwesomeIcon size="2x" icon={faShip} />
                        </Link>
                        <Link to="/services-land" className="service-fontawesome-icon">
                            <FontAwesomeIcon size="2x" icon={faShippingFast} />
                        </Link>
                        <Link to="/services-customs" className="service-fontawesome-icon">
                            <FontAwesomeIcon size="2x" icon={faFileAlt} />
                        </Link>
                        <Link to="/services-storage" className="service-fontawesome-icon">
                            <FontAwesomeIcon size="2x" icon={faWarehouse} />
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvisoryContent