import React from "react";
import { Link } from "react-router-dom";
import "../Brokerage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentsDollar, faFileAlt, faPlaneDeparture, faShip, faShippingFast, faWarehouse } from '@fortawesome/free-solid-svg-icons'


const BrokerageContent = () => {
  return (
    <div className="brokerage-content">
        <div className="brokerage-content-content">
            <div className="brokerage-content-content-content">
              <div className="brokerage-content-content-left">
                <div className="brokerage-content-content-left-txt">
                </div>
              </div>
                <div className="brokerage-content-content-right">
                    <div className="brokerage-content-right-cards">
                      <p className="brokerage-content-right-cards-row">
                        
                        From our vast connection with fully licensed customs brokerage companies, we provide clients with the best services with regard to clearance of shipments with customs
                      </p>
                      <p className="brokerage-content-right-cards-row">
                        Rhinojohn Prime Metal offers customs clearance services with the preparation and submission of documentation required for import, export and transit.
                        Our team will guide you through any complex documentation process. 
                      </p>
                      <p className="brokerage-content-right-cards-row">
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
  );
};

export default BrokerageContent;
