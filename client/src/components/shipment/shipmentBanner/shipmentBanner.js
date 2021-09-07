import React from 'react'
import "../shipment.css"
import { useFormik } from 'formik'
import * as Yup from "yup"

const ShipmentBanner = () => {

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

    return (
        <div className="shipment-banner">
            <div className="shipment-banner-content">
                <div className="shipment-banner-content-group">
                    <h3 className="shipment-banner-h3">
                        Track your shipment
                    </h3>
                    <form style={{  display: "flex",
                                    flexDirection: "column", 
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginTop: "20px" }} onSubmit={formik.handleSubmit}>
                        <select type="text"  name="tracktype" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.tracktype} required>
                                    <option value="" disabled label="Please select tracking options"/>
                                    <option value="trackshipment" label="Track Shipment" />
                                    <option value="trackstorage" label="Truck Storage"/>
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
                </div>
            </div>
        </div>
    )
}

export default ShipmentBanner
