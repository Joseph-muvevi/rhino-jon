import { faGem, faInfoCircle, faPlaneDeparture, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../dashboard.css";

const DashboardCards = ({shipment}) => {
    // const length = shipment.length
  return (
    <div className="dashboard-cards">
        <div className="dashboard-card">
            <div className="dashboard-card-circle">
                <FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faWarehouse}/>
            </div>
            <h3 className="dashboard-card-h3">
                700
            </h3>
            <p className="dashboard-card-p">
                Product Stored
            </p>
        </div>
       
        <div className="dashboard-card">
            <div className="dashboard-card-circle">
                <FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faPlaneDeparture}/>
            </div>
            <h3 className="dashboard-card-h3">
                {
                    console.log(shipment, "Data from dashboard cards")
                }
            </h3>
            <p className="dashboard-card-p">
                Product Shipped
            </p>
        </div>
       
        <div className="dashboard-card">
            <div className="dashboard-card-circle">
                <FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faGem}/>
            </div>
            <h3 className="dashboard-card-h3">
                700
            </h3>
            <p className="dashboard-card-p">
                Minerals Sold
            </p>
        </div>
       
        <div className="dashboard-card">
            <div className="dashboard-card-circle">
                <FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faInfoCircle}/>
            </div>
            <h3 className="dashboard-card-h3">
                700
            </h3>
            <p className="dashboard-card-p">
                General Enquiries
            </p>
        </div>
       
    </div>
  );
};

export default DashboardCards;
