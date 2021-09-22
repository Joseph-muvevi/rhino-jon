import { faGem, faInfoCircle, faPlaneDeparture, faShippingFast, faTable, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom"
import React, {useState, useEffect} from "react";
import "../dashboard.css";

const DashboardCards = ({  storeQuotation, prodQuotation, logQuotation, strLength}) => {
	// const length = shipment.length

	// const [storage, setStorage] = useState([])
	// const [product, setProduct] = useState([])
	// const [logistics, setLogistics] = useState([])

	// const setStorageData = () =>{
	//     setStorage(storageQuotation)
	// }

	// useEffect(() => {
	//     setStorageData()
	// }, [])

	// console.log(strLength, "tha's the value")

  return (
		<div className="dashboard-cards">
			<div className="dashboard-cards-container">
				<Link  to="/dashboard/productstored" className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faWarehouse}/>
					</div>
					<h3 className="dashboard-card-h3">
						{strLength ? strLength : "No items yet..." }
					</h3>
					<p className="dashboard-card-p">
						Product Stored
					</p>
				</Link>
			
				<Link to="/dashboard/productshipped" className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faPlaneDeparture}/>
					</div>
					<h3 className="dashboard-card-h3">
						{
							// storageQuotation ? console.log("storage cards data", storageQuotation) : "nothing here"
						}
					</h3>
					<p className="dashboard-card-p">
						Product Shipped
					</p>
				</Link>
			
				<Link to="/dashboard/productquotation" className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faGem}/>
					</div>
					<h3 className="dashboard-card-h3">
						700
					</h3>
					<p className="dashboard-card-p">
						Product quotations
					</p>
				</Link>
			
				<Link to ="/dashboard/generalenquiries" className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faInfoCircle}/>
					</div>
					<h3 className="dashboard-card-h3">
						700
					</h3>
					<p className="dashboard-card-p">
						General Enquiries
					</p>
				</Link>
			
			</div>
			<div className="dashboard-cards-container">
				<Link to="/dashboard/storagequotation" className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faWarehouse}/>
					</div>
					<h3 className="dashboard-card-h3">
						{strLength ? strLength : "No items yet..." }
					</h3>
					<p className="dashboard-card-p">
						Storage quotation
					</p>
				</Link>
			
				<Link to="/dashboard/shipmentquotation" className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faShippingFast}/>
					</div>
					<h3 className="dashboard-card-h3">
						
					</h3>
					<p className="dashboard-card-p">
						Shipment quotation
					</p>
				</Link>
			
				<Link to="/dashboard/shipmenttable" className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faTable}/>
					</div>
					<h3 className="dashboard-card-h3">
						700
					</h3>
					<p className="dashboard-card-p">
						Shipment table
					</p>
				</Link>
			
				<Link to="/dashboard/storagetable" className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faTable}/>
					</div>
					<h3 className="dashboard-card-h3">
						700
					</h3>
					<p className="dashboard-card-p">
						Storage table
					</p>
				</Link>
			
			</div>
		</div>
  );
};

export default DashboardCards;
