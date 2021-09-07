import React, { useEffect, useState } from "react";
import "../shipment.css";
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from "axios";
import TheTable from "./table";

const ShipmentTable = () => {
  const [tracktype, setTracktype] = useState("storageshipment");
  const [trackno, setTrackno] = useState("")
  const [shipment, setShipment] = useState([])

  const handleSelect = (e) => {
    setTracktype(e.target.value)
  }
  
  const handleTrackno = (e) => {
    setTrackno(e.target.value)
  }

//   const formik = useFormik({
//     initialValues : {
//         tracktype: "",
//         tracknumber: ""
//     },
//     validationSchema: Yup.object().shape({
//         tracktype: Yup.string()
//             .required()
//             .min(3)
//             .max(50),
//         tracknumber: Yup.string()
//             .required()
//             .min(3)
//             .max(50)
//     }), 
//     onSubmit: (values, {resetForm}) => {
//         alert(JSON.stringify(values, null, 2))
        
//         resetForm({
//             initialValues : ""
//         })
//     }
// })

// storageshipment

  useEffect(() => {
    try {
      axios.get(`http://localhost:8080/api/${tracktype}`)
      .then(res => setShipment(res.data))
      .then(console.log(shipment))
    } catch (err) {
      console.log(err)
    }
  }, [tracktype, trackno]);

  return (
    <div className="shipping">

      <div className="shipment-table">
        <form style={{  display: "flex",
                        flexDirection: "column", 
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px" }} >
            <select type="text"  name="tracktype" 
                    onChange={handleSelect}  value={tracktype} required>
                        <option value="" disabled label="Please select tracking options"/>
                        <option value="logisticsrecords" label="Track Shipment" />
                        <option value="storageshipment" label="Truck Storage"/>
                    </select>
                    <br/>
            <input type="text" placeholder="Insert Track number" name="tracknumber" 
                    onChange={handleTrackno} value={trackno} required/>
        </form>
      </div>
      {shipment ? (
        <TheTable key={shipment.id} data={shipment} />
      ) : (
        <div className="shipment-table-content">
          <h1 className="shipment-table-header">Nothin here yet</h1>
          <p className="shipment-table-p"></p>
        </div>
      )}
      {/* {console.log(shipment, "This is from the shipment data")} */}
      {shipment.map(items => {
        return console.log(items)
      })}
    </div>
  );
};

export default ShipmentTable;
