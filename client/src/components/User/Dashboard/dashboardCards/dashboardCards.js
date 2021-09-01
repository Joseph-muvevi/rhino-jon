import { faArrowUp, faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./dashboardCards.css";

const DashboardCards = () => {
  return (
    <div className="dashboard-cards">
      <div className="dashboard-cards-row">
        <div className="dashboard-cards-item">
          <div className="dashboard-cards-left">
            <FontAwesomeIcon icon={faShippingFast} color="white" />
          </div>
          <div className="dashboard-cards-right">
            <h4 className="dashboard-card-right-h4">Items Shipped</h4>
            <div className="dashboard-cards-right-content">
              <p className="dashboard-card-right-number">28</p>
              <p className="dashboard-card-right-p">
                60% <FontAwesomeIcon icon={faArrowUp} color="green" /> Than the
                previous month
              </p>
            </div>
          </div>
        </div>

        <div className="dashboard-cards-item">
          <div className="dashboard-cards-left">
            <FontAwesomeIcon icon={faShippingFast} color="white" />
          </div>
          <div className="dashboard-cards-right">
            <h4 className="dashboard-card-right-h4">Minerals/Metals Sold</h4>
            <div className="dashboard-cards-right-content">
              <p className="dashboard-card-right-number">28</p>
              <p className="dashboard-card-right-p">
                60% <FontAwesomeIcon icon={faArrowUp} color="green" /> Than the
                previous month
              </p>
            </div>
          </div>
        </div>

        <div className="dashboard-cards-item">
          <div className="dashboard-cards-left">
            <FontAwesomeIcon icon={faShippingFast} color="white" />
          </div>
          <div className="dashboard-cards-right">
            <h4 className="dashboard-card-right-h4">Clients Reached</h4>
            <div className="dashboard-cards-right-content">
              <p className="dashboard-card-right-number">28</p>
              <p className="dashboard-card-right-p">
                20% <FontAwesomeIcon icon={faArrowUp} color="green" /> Than the
                previous month
              </p>
            </div>
          </div>
        </div>

        <div className="dashboard-cards-item">
          <div className="dashboard-cards-left">
            <FontAwesomeIcon icon={faShippingFast} color="white" />
          </div>
          <div className="dashboard-cards-right">
            <h4 className="dashboard-card-right-h4">Brokerage Activity</h4>
            <div className="dashboard-cards-right-content">
              <p className="dashboard-card-right-number">4</p>
              <p className="dashboard-card-right-p">
                30% <FontAwesomeIcon icon={faArrowUp} color="green" /> Than the
                previous month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
