import {
  faChevronRight,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./shipmentdatatable.css";

const ShipmentTableHeader = ({ headers }) => {
  const header = headers;
  console.log("This is from table header",header)



  return (
	<>
		<div className="shipment-table-headers">
			<div className="font-awesome-sign-alt-icon">
				<FontAwesomeIcon icon={faSignOutAlt} color="white" size="2x" />
			</div>
			<div className="header-info-container">
				<div className="shipment-table-headers-left">
					<div className="shipment-table-headers-body">
						<h3 className="shipment-table-headers-h3-flex">
							Tracking number :
							<span className="grey-item-container-shipment">
								{header ? header.trackno : null}
							</span>
						</h3>
						<h3 className="shipment-table-headers-p">
						<span className="grey-item-container-shipment-arrow">
							{header ? header.notes : null}
						</span>
						</h3>
						<h3 className="shipment-table-headers-h3">
							Shipper
							{/* {header ? header.fullnames : null} */}
						</h3>
						<p className="shipment-table-headers-p">
							{/* {header ? header.address : null} */}
							<FontAwesomeIcon
								icon={faChevronRight}
								className="fontawesome-chrevron"
								color="white"
							/>
							
							CONSIGNEE
						</p>
						<h3 className="shipment-table-headers-h3">Address</h3>
						<p className="shipment-table-headers-p">
							{/* {header ? header.address : null} */}
							<FontAwesomeIcon
								icon={faChevronRight}
								className="fontawesome-chrevron"
								color="white"
							/>
							ADRESS
						</p>
					</div>
				</div>
				<div className="shipment-tabe-headers-middle">
					<div className="shipment-table-headers-body">
						<h3 className="shipment-table-headers-h3">
						[Latest date Wednesday 12 2021 at latest time 20:21]
						</h3>
						<div className="h3-p-enclosing">
							<h3 className="shipment-table-headers-h3">
								Origin Service Area :
							</h3>
							<p className="shipment-table-headers-p">
								<FontAwesomeIcon
								icon={faChevronRight}
								size="1x"
								className="fontawesome-chrevron"
								color="white"
								/>
								{header ? header.arrivalcity : null}
							</p>
						</div>
						<div className="h3-p-enclosing">
							<h3 className="shipment-table-headers-h3">
								Destination Service Area :
							</h3>
							<p className="shipment-table-headers-p">
								<FontAwesomeIcon
								icon={faChevronRight}
								size="1x"
								className="fontawesome-chrevron"
								color="white"
								/>
								{header ? header.arrivalcity : null}
							</p>
						</div>
					</div>
				</div>
				<div className="shipment-tabe-headers-right">
					<div className="shipment-table-headers-body">
						<h3 className="shipment-table-headers-h3-estimated">
							Estimated delivery :
						</h3>
						<p className="shipment-table-headers-info">
							{header ? header.arrivaldate : null}
						</p>
						<p className="shipment-table-headers-info">
							By End of Day
						</p>
						<h3 className="shipment-table-headers-h3">
							Consignee
							{/* {header ? header.fullnames : null} */}
						</h3>
						<p className="shipment-table-headers-p">
							{/* {header ? header.address : null} */}
							<FontAwesomeIcon
								icon={faChevronRight}
								className="fontawesome-chrevron"
								color="white"
							/>
							
							CONSIGNEE
						</p>
						<h3 className="shipment-table-headers-h3">Address</h3>
						<p className="shipment-table-headers-p">
							{/* {header ? header.address : null} */}
							<FontAwesomeIcon
								icon={faChevronRight}
								className="fontawesome-chrevron"
								color="white"
							/>
							ELKA
						</p>
						<div className="shipment-table-headers-h3-sign">
							<h3 className="shipment-table-headers-h3">Signed for by :</h3>
							<p className="shipment-table-headers-p-sign">
								{ header ? header.collectedby : null }
								{/*
									if collected enter [SINGED UP FOR BY NAME OF THE RECEIVER]
								*/}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
  );
};

export default ShipmentTableHeader;
