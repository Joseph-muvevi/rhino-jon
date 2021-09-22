import React from "react";
import { Link } from "react-router-dom";
import "../Ocean.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentsDollar, faFileAlt, faPlaneDeparture, faShip, faShippingFast, faWarehouse } from '@fortawesome/free-solid-svg-icons'


const OceanContent = () => {
	return (
		<div className="ocean-content">
			<div className="ocean-content-content">
				<div className="ocean-content-content-content">
					<div className="ocean-content-content-left"></div>
					<div className="ocean-content-content-right">
						<div className="ocean-content-right-cards">
							<p className="ocean-content-right-cards-row">
								We offer ocean freight services for several destinations in the
								world and for each volume, both LCL (Less Than Container Load)
								as FCL (Full Container Load).
							</p>
							<p className="ocean-content-right-cards-row">
								Our international sea freight service will assist you get your
								product where it needs to be by covering not only freight
								movement of your product, but also customs clearance with our
								in-house team of freight specialists.
							</p>
							<p className="ocean-content-right-cards-row">
								With our online portal, our clients are fully informed of the
								ocean freight movement by the real time tracking technology.
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
						<div className="service-fontawesome-div">
							<Link to="/services-trade" className="service-fontawesome-icon-card">
								<p className="service-font-awesome-card-p">
									Trade
								</p>
								<FontAwesomeIcon className="the-service-fontawesome-icon" icon={faCommentsDollar} />
							</Link>
							<Link to="/services-air" className="service-fontawesome-icon-card">
								<p className="service-font-awesome-card-p">
									Air
								</p>
								<FontAwesomeIcon className="the-service-fontawesome-icon" icon={faPlaneDeparture} />
							</Link>
							<Link to="/services-ocean"  className="service-fontawesome-icon-card">
								<p className="service-font-awesome-card-p">
									Sea
								</p>
								<FontAwesomeIcon className="the-service-fontawesome-icon" icon={faShip}/>
							</Link>
							<Link to="/services-land" className="service-fontawesome-icon-card">
								<p className="service-font-awesome-card-p">
									Land
								</p>
								<FontAwesomeIcon className="the-service-fontawesome-icon" icon={faShippingFast} />
							</Link>
							<Link to="/services-customs" className="service-fontawesome-icon-card">
								<p className="service-font-awesome-card-p">
									Customs
								</p>
								<FontAwesomeIcon className="the-service-fontawesome-icon" icon={faFileAlt}/>
							</Link>
							<Link to="/services-storage" className="service-fontawesome-icon-card">
								<p className="service-font-awesome-card-p">
									Warehouse
								</p>
								<FontAwesomeIcon className="the-service-fontawesome-icon" icon={faWarehouse}  />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OceanContent;
