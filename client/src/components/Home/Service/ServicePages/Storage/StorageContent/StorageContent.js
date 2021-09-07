import React from "react";
import "../Storage.css";
import { Link } from "react-router-dom";

const StorageContent = () => {
  return (
    <div className="storage-content">
      <div className="storage-content-content">
        {/* <div className="storage-content-content-top">
                    <p className="storage-content-content-left-p">
                        What we offer
                    </p>     
                    <h3 className="storage-content-content-left-header">
                        Header Topic
                    </h3>
                </div> */}
        <div className="storage-content-content-content">
          <div className="storage-content-content-left"></div>
          <div className="storage-content-content-right">
            <div className="storage-content-right-cards">
              <p className="storage-content-right-cards-row">
                Rhinojohn Prime Metal also offers warehousing and storage
                services for minerals through available customs bonded
                warehouses and vaults at our facilities. The safety of mining
                products stored in our custody is guaranteed with the support of
                both government and private security services.
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

export default StorageContent;
