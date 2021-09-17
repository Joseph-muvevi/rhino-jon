import {
  faChevronRight,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../shipment.css";

const ShipmentTableHeader = ({ headers }) => {
  const header = headers;
  console.log("This is from table header",header)

  return (
	<>
		<div className="storage-table-headers">
			<div className="font-awesome-sign-alt-icon">
				<FontAwesomeIcon icon={faSignOutAlt} color="white" size="2x" />
			</div>
			<div className="header-info-container">
				<div className="storage-table-headers-left">
					<div className="storage-table-headers-body">
						<h3 className="storage-table-headers-h3-flex">
							Tracking number :
							<span className="grey-item-container">
								{header ? header.trackno : null}
							</span>
						</h3>
						<h3 className="storage-table-headers-p">
						<span className="white-background-red-text">
							{header ? header.notes : null}
						</span>
						</h3>
						<h3 className="storage-table-headers-h3">
							Consignee
							{/* {header ? header.fullnames : null} */}
						</h3>
						<p className="storage-table-headers-p">
							{/* {header ? header.address : null} */}
							<FontAwesomeIcon
								icon={faChevronRight}
								className="fontawesome-chrevron"
								color="white"
							/>
							
							CONSIGNEE
						</p>
						<h3 className="storage-table-headers-h3">Address</h3>
						<p className="storage-table-headers-p">
							{/* {header ? header.address : null} */}
							<FontAwesomeIcon
								icon={faChevronRight}
								className="fontawesome-chrevron"
								color="white"
							/>
							ADRESS
						</p>
						<div className="storage-table-headers-h3-sign">
							<h3 className="storage-table-headers-h3">Signed for by :</h3>
							<p className="storage-table-headers-p-sign">
								ELKA
								{/*
									if collected enter [SINGED UP FOR BY NAME OF THE RECEIVER]
								*/}
							</p>
						</div>
					</div>
				</div>
				<div className="storage-tabe-headers-middle">
					<div className="storage-table-headers-body">
						<h3 className="storage-table-headers-h3">
						[Latest date Wednesday 12 2021 at latest time 20:21]
						</h3>
						<div className="h3-p-enclosing">
							<h3 className="storage-table-headers-h3">
								Origin Service Area :
							</h3>
							<p className="storage-table-headers-p">
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
							<h3 className="storage-table-headers-h3">
								Destination Service Area :
							</h3>
							<p className="storage-table-headers-p">
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
				<div className="storage-tabe-headers-right">
					<div className="storage-table-headers-body">
						<h3 className="storage-table-headers-h3-estimated">
							Estimated delivery : [Wednesday 12 2020]
						</h3>
						<p className="storage-table-headers-p">
							{header ? header.date : null}
						</p>
						<p className="storage-table-headers-p">By End of Day</p>
					</div>
				</div>
			</div>
		</div>
	</>
  );
};

export default ShipmentTableHeader;
