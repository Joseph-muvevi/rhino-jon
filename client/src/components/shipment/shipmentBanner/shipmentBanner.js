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
                </div>
            </div>
        </div>
    )
}

export default ShipmentBanner
