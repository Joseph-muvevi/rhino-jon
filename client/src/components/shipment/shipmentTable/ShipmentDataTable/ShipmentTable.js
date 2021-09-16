import React, { useEffect, useState } from "react";
import "../../shipment.css";
import axios from "axios";
import ShipmentCard from "./ShipmentCard.js";
import Navbar from "../../../Navbar/Navbar";

const ShipmentTable = () => {
  const [trackNumber, setTrackNumber] = useState("")
  const [shipment, setShipment] = useState([])


  
  const handleTrackno = (e) => {
    setTrackNumber(e.target.value)
  }

  const trackItem = (e) => {
    e.preventDefault()
        axios.get(`http://localhost:8080/api/logisticsrecords`)
        .then(res => {
          setShipment(res.data)
          // const result = shipment
         
        })
        .catch(err => console.log(err))
  }
  console.log(shipment)
  const result = shipment.find( ({ trackno }) => trackno === trackNumber)
  console.log("testing the logistics", result)


  useEffect(() => {
    // trackItem(e)
  }, []);

  return (
    <div className="shipping">
      <Navbar/>
      <div style={{height: "50px"}} className="shipment-table">
        <form onSubmit={trackItem} className="shipping-table-form" >
            <input type="text" placeholder="Insert Track number" name="tracknumber" 
                    onChange={handleTrackno} value={trackNumber} required/>
            <button type="submit"> Search </button>
        </form>
        {
        //  console.log("this is the shipment data", shipment)
        }
      </div>
      {shipment || shipment !== undefined ? (
        <ShipmentCard  result={result} />
      ) : (
        <div className="shipment-table-content">
          <h1 className="shipment-table-header">Nothin here yet</h1>
          <p className="shipment-table-p"></p>
        </div>
      )}
      {/* {shipment.map(items => {
        return console.log(items)
      })} */}
    </div>
  );
};

export default ShipmentTable;
