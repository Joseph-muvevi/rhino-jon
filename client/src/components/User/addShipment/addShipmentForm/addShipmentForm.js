import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import * as Yup from "yup"
import React from 'react'
import golden from "../../../../assets/gold1.jpg"
import "./addShipmentForm.css"
import axios from "axios"


const AddShipmentForm = () => {

    const formik = useFormik({
        initialValues : {
            quantity:  "",
            title: "",
            departure: "",
            departuredate: "",
            destination: "",
            destinationdate: "",
            currentlocation : "",
            eta: "",
            description: ""
        },
        validationSchema: Yup.object().shape({
            quantity : Yup.number()
                .required("This field is required")
                .min(1, "Minimum number allowed is 0")
                .max(1000000, "maximum characters allowed are 1000000"),
            title : Yup.string()
                .required("This field is required")
                .min(6, "Minimum characters allowed are 4")
                .max(200, "maximum characters allowed are 200"),
            departure : Yup.string()
                .required("This field is required")
                .min(6, "Minimum characters allowed are 4")
                .max(200, "maximum characters allowed are 200"),
            departuredate : Yup.string()
                .required("This field is required"),
                // .min(6, "Minimum characters allowed are 4")
                // .max(200, "maximum characters allowed are 200"),
            destination : Yup.string()
                .required("This field is required")
                .min(6, "Minimum characters allowed are 4")
                .max(200, "maximum characters allowed are 200"),
            destinationdate : Yup.string()
                .required("This field is required"),
                // .min(6, "Minimum characters allowed are 4")
                // .max(2000, "maximum characters allowed are 2000"),
            currentlocation : Yup.string()
                .required("This field is required")
                .min(6, "Minimum characters allowed are 4")
                .max(200, "maximum characters allowed are 200"),
            eta : Yup.string()
                .required("This field is required"),
                // .min(6, "Minimum characters allowed are 4")
                // .max(2000, "maximum characters allowed are 200"),
            description : Yup.string()
                .required("This field is required")
                .min(20, "Minimum characters allowed are 4")
                .max(2000, "maximum characters allowed are 200"),
        }),
        onSubmit: (values) => {
            axios.post("http://localhost:8080/api/goods", values)
                .then(console.log(values))
                .catch(err => console.log(err))
        }
    })

    return (
        <div className="add-shipment-form">
            <div className="add-shipment-form-content">
                <div className="add-shipment-left">
                    <img className="add-shipment-form-image" src={golden} alt="Rhino jon gold shippment"/>
                </div>

                <form onSubmit={formik.handleSubmit} className="the-add-shipment-form">

                    <div className="add-shipment-small-inputs">
                        <div className="add-shipment-small-input-group">
                            <label>Quantity</label>
                            <input type="number" placeholder="Track number here..." name="quantity" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.quantity} required/>
                                {formik.touched.quantity && formik.errors.quantity ? (
                                    <div className="error">{formik.errors.quantity}</div>
                                ) : null}
                        </div>
                        <div className="add-shipment-small-input-group">
                            <label>Goods Title</label>
                            <input type="text" placeholder="Goods title here..." name="title" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title} required/>
                                {formik.touched.title && formik.errors.title ? (
                                    <div className="error">{formik.errors.title}</div>
                                ) : null}
                        </div>
                    </div>

                    <div className="add-shipment-small-inputs">
                        <div className="add-shipment-small-input-group">
                            <label>Departure city</label>
                            <input type="text" placeholder="Arrival city here..." name="departure" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.departure} required/>
                                {formik.touched.departure && formik.errors.departure ? (
                                    <div className="error">{formik.errors.departure}</div>
                                ) : null}
                        </div>
                        <div className="add-shipment-small-input-group">
                            <label>Departure Date</label>
                            <input type="text" placeholder="Arrival date here..." name="departureDate" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.departureDate} required/>
                                {formik.touched.departureDate && formik.errors.departureDate ? (
                                    <div className="error">{formik.errors.departureDate}</div>
                                ) : null}
                        </div>
                    </div>
                    
                    <div className="add-shipment-small-inputs">
                        <div className="add-shipment-small-input-group">
                            <label>Destination city</label>
                            <input type="text" placeholder="Goods Destination" name="destination" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.destination} required/>
                                {formik.touched.destination && formik.errors.destination ? (
                                    <div className="error">{formik.errors.destination}</div>
                                ) : null}                            
                        </div>
                        <div className="add-shipment-small-input-group">
                            <label>Destination Date</label>
                            <input type="text" placeholder="Departure date here..." name="destinationDate" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.destinationDate} required/>
                                {formik.touched.departureDate && formik.errors.departureDate ? (
                                    <div className="error">{formik.errors.departureDate}</div>
                                ) : null}            
                        </div>
                    </div>

                    <div className="add-shipment-small-inputs">
                        <div className="add-shipment-small-input-group">
                            <label>Current Location</label>
                            <input type="text" placeholder="Track number here..." name="currentLocation" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.currentLocation} required/>
                                {formik.touched.currentLocation && formik.errors.currentLocation ? (
                                    <div className="error">{formik.errors.currentLocation}</div>
                                ) : null}                            
                        </div>
                        <div className="add-shipment-small-input-group">
                            <label>Estimated Arrival date</label>
                            <input type="text" placeholder="Estimated Arrival date here..." name="eta" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.eta} required/>
                                {formik.touched.eta && formik.errors.eta ? (
                                    <div className="error">{formik.errors.eta}</div>
                                ) : null}
                        </div>
                    </div>

                    <div className="contact-textarea">
                        <label>Description</label>
                        <textarea type="text" name="description" placeholder="Little descriptions eg weight, size, color, etc" 
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description} required/>
                            {formik.touched.description && formik.errors.description ? (
                                    <div className="error">{formik.errors.description}</div>
                                ) : null}
                    </div>

                    <br/>
                    <button>
                        Submit <FontAwesomeIcon icon={faPaperPlane}/>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddShipmentForm
