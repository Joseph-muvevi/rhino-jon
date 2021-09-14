import React, { useEffect, useState } from "react";
import "../shipment.css";
import axios from "axios";
import ShipmentCard from "./ShipmentCard";

const ShipmentTable = () => {
  const [tracktype, setTracktype] = useState("storageshipment");
  const [trackNumber, setTrackNumber] = useState("")
  const [shipment, setShipment] = useState([])

  const handleSelect = (e) => {
    setTracktype(e.target.value)
  }
  
  const handleTrackno = (e) => {
    setTrackNumber(e.target.value)
  }

  const trackItem = (e) => {
    e.preventDefault()
        // axios.get(`http://localhost:8080/api/${tracktype}/${trackNumber}`)
        axios.get(`http://localhost:8080/api/${tracktype}`)
        .then(res => {
          setShipment(res.data)
          // const result = shipment
          console.log(trackNumber)
        })
        .catch(err => console.log(err))
  }

  const result = shipment.find( ({ trackno }) => trackno === trackNumber)
  console.log("testing the object finder", result)


  useEffect(() => {
    // trackItem(e)
  }, []);

  return (
    <div className="shipping">

      <div style={{height: "50px"}} className="shipment-table">
        <form onSubmit={trackItem} className="shipping-table-form" >
            <select type="text"  name="tracktype" 
                    onChange={handleSelect}  value={tracktype} required>
                        <option value="" disabled label="Please select tracking options"/>
                        <option value="logisticsrecords" label="Track Shipment" />
                        <option value="storageshipment" label="Truck Storage"/>
                    </select>
                    <br/>
            <input type="text" placeholder="Insert Track number" name="tracknumber" 
                    onChange={handleTrackno} value={trackNumber} required/>
            <button type="submit"> Search </button>
        </form>
        {
        //  console.log("this is the shipment data", shipment)
        }
      </div>
      {shipment || shipment === undefined ? (
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
