import React from 'react'
import { Link } from 'react-router-dom'
import "../Linkages.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentsDollar, faFileAlt, faPlaneDeparture, faShip, faShippingFast, faWarehouse } from '@fortawesome/free-solid-svg-icons'


const LinkagesContent = () => {
    return (
        <div className="linkages-content">
            <div className="linkages-content-content">
                <div className="linkages-content-content-content">
                    <div className="linkages-content-content-left">
                        <div className="linkages-content-content-left-txt">
                        </div>              
                    </div>
                    <div className="linkages-content-content-right">
                        <div className="linkages-content-right-cards">
                            <p className="linkages-content-right-cards-row">
                                We have teams of freight forwarders and road 
                                transport service providers experienced with good knowledge and experience.
                            </p>
                            <p className="linkages-content-right-cards-row">
                                Through our strong partnership network in Africa, we provide sustainable road and rail transport solutions 
                                for mining  products from their places of extraction and production to places of transit 
                                and their final destinations.
                                Our coverage extend from West Africa to South Africa through East and Central Africa.
                            </p>
                        
                            <div className="lower-button-group">
                                <Link to="/service-type">
                                    <button className="storage-content-button">
                                        Request a quote
                                    </button>
                                </Link>
                                <Link to="/quotation">
                                    <button className="storage-content-button">
                                        Make enquiry
                                    </button>
                                </Link>
                                <br/>
                            </div>
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

export default LinkagesContent
