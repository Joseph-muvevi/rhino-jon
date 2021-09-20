import { faGem, faInfoCircle, faPlaneDeparture, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className="dashboard-card">
            <div className="dashboard-card-circle">
                <FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faWarehouse}/>
            </div>
            <h3 className="dashboard-card-h3">
                {strLength ? strLength : "No items yet..." }
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
                    // storageQuotation ? console.log("storage cards data", storageQuotation) : "nothing here"
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
