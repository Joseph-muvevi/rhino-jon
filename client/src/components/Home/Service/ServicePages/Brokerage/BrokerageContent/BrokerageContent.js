import React from "react";
import { Link } from "react-router-dom";
import "../Brokerage.css";

const BrokerageContent = () => {
  return (
    <div className="brokerage-content">
      <div className="brokerage-content-content">
        {/* <div className="brokerage-content-content-top">
                    <p className="brokerage-content-content-left-p">
                        What we offer
                    </p>     
                    <h3 className="brokerage-content-content-left-header">
                        Header Topic
                    </h3>
                </div> */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerageContent;
