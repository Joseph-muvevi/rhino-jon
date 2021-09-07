import React, { useEffect, useState } from "react";
import "../shipment.css";
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from "axios";
import TheTable from "./table";

const ShipmentTable = () => {
  const [searchParam, setSearchParam] = useState("storageshipment")
  const [shipment, setShipments] = useState([]);
  const [trackno, setTrackno] = useState([])

  
  const formik = useFormik({
    initialValues : {
        tracktype: "",
        tracknumber: ""
    },
    validationSchema: Yup.object().shape({
        tracktype: Yup.string()
            .required()
            .min(3)
            .max(50),
        tracknumber: Yup.string()
            .required()
            .min(3)
            .max(50)
    }), 
    onSubmit: (values, {resetForm}) => {
        alert(JSON.stringify(values, null, 2))
        
        resetForm({
            initialValues : ""
        })
    }
})

  useEffect(() => {
    const getShipments = () => {
      axios
      .get("http://localhost:8080/api/storageshipment")
      .then((res) => console.log(res.data))
      .then((object) => setShipments(object.data))
      .catch((err) => console.log(err));
    }
    const getStorage = () => {
      axios
      .get("http://localhost:8080/api/storageshipment")
      .then((res) => console.log(res.data))
      .then((object) => setShipments(object.data))
      .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="shipping">

      <div className="shipment-table">
        <form style={{  display: "flex",
                        flexDirection: "column", 
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px" }} onSubmit={formik.handleSubmit}>
            <select type="text"  name="tracktype" 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.tracktype} required>
                        <option value="" disabled label="Please select tracking options"/>
                        <option value="logisticsrecords" label="Track Shipment" />
                        <option value="storageshipment" label="Truck Storage"/>
                    </select>
                    {formik.touched.tracktype && formik.errors.tracktype ? (
                        <div className="error">{formik.errors.tracktype}</div>
                    ) : null}<br/>
            <input type="text" placeholder="Insert Track number" name="tracknumber" 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.tracknumber} required/>
                    {formik.touched.tracknumber && formik.errors.tracknumber ? (
                        <div className="error">{formik.errors.tracknumber}</div>
                    ) : null}
        </form>
        {shipment ? (
          <TheTable key={shipment.id} data={shipment} />
        ) : (
          <div className="shipment-table-content">
            <h1 className="shipment-table-header">Nothin here yet</h1>
            <p className="shipment-table-p"></p>
          </div>
        )}
        {/* {console.log(shipment, "This is from the shipment data")} */}
      </div>
    </div>
  );
};

export default ShipmentTable;
