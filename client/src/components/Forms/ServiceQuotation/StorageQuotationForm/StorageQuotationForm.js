import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import * as Yup from "yup"
import React from 'react'
import golden from "../../../../assets/gold1.jpg"
import "../ServiceQuotation.css"
import axios from "axios"


const StorageQuotationForm = () => {

    const formik = useFormik({
        initialValues : {
            title: "",
            fullnames: "",
            company:  "",
            position: "",
            email: "",
            unit: "",
            weight: "",
            country: "",
            city: "",
            productname: "", 
            quantity: "",
            producttype: "", //solid liquid gass etc
            storagecity: "",
            storagecountry: " ",
            description: ""
        },
        validationSchema: Yup.object().shape({
            title : Yup.string()
                .required("This field is required"),
            fullnames : Yup.string()
                .required("This field is required")
                .min(6, "Minimum characters allowed are 6")
                .max(200, "maximum characters allowed are 200"),
            company : Yup.string()
                .required("This field is required")
                .min(3, "Minimum character allowed is 2")
                .max(100, "maximum characters allowed are 100"),
            position : Yup.string()
                .required("This field is required")
                .min(3, "Minimum characters allowed are 3")
                .max(100, "maximum characters allowed are 100"),
            email : Yup.string()
                .required("This field is required")
                .min(6, "Minimum characters allowed are 6")
                .max(200, "maximum characters allowed are 200"),
            unit : Yup.string()
                .required("This field is required"),
            weight : Yup.number()
                .required("This field is required")
                .min(1, "Minimum product allowed allowed is 1")
                .max(50000, "maximum characters allowed are 50000"),
            country : Yup.string()
                .required("This field is required")
                .min(4, "Minimum characters allowed are 4")
                .max(50, "maximum characters allowed are 50"),
            city : Yup.string()
                .required("This field is required")
                .min(4, "Minimum characters allowed are 4")
                .max(50, "maximum characters allowed are 50"),
            productname : Yup.string()
                .required("This field is required")
                .min(6, "Minimum characters allowed are 6")
                .max(200, "maximum characters allowed are 200"),
            quantity : Yup.number()
                .required("This field is required")
                .min(1, "Minimum characters allowed are 1")
                .max(5000000, "maximum characters allowed are 5000000"),
            producttype : Yup.string()
                .required("This field is required"),
            storagecity : Yup.string()
                .required("This field is required")
                .min(4, "Minimum characters allowed are 4")
                .max(50, "maximum characters allowed are 50"),
            storagecountry : Yup.string()
                .required("This field is required")
                .min(4, "Minimum characters allowed are 4")
                .max(50, "maximum characters allowed are 50"),
            description : Yup.string()
                .required("This field is required")
                .min(20, "Minimum characters allowed are 4")
                .max(2000, "maximum characters allowed are 200"),
        }),
        onSubmit: (values, {resetForm}) => {
            axios.post("http://localhost:8080/api/storagequotation", values)
                .then(console.log(values))
                .catch(err => console.log(err))
            alert(JSON.stringify(values, null, 2))
            console.log(values)
            resetForm({values : ""})
        }
    })

    return (
        <div className="service-quotation-form">
            <div className="service-quotation-form-content">
                <div className="service-quotation-left">
                    <img className="service-quotation-form-image" src={golden} alt="Rhino jon gold shippment"/>
                </div>

                <form onSubmit={formik.handleSubmit} className="the-service-quotation-form">

                    <div className="service-quotation-small-inputs">
                        <div className="service-quotation-small-input-group">
                            <label>Your Title</label>
                                <select type="text" placeholder="Arrival city here..." name="title" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title} required>
                                    <option value="" disabled label="Please select an option" />
                                    <option value="mr" label="Mr." />
                                    <option value="mrs" label="Mrs."/>
                                    <option value="miss" label="Miss."/>
                                </select>
                                {formik.touched.title && formik.errors.title ? (
                                    <div className="error">{formik.errors.title}</div>
                                ) : null}
                        </div>
                        <div className="service-quotation-small-input-group">
                            <label>Your Fullnames</label>
                            <input type="text" placeholder="Your fullnames here..." name="fullnames" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fullnames} required/>
                                {formik.touched.fullnames && formik.errors.fullnames ? (
                                    <div className="error">{formik.errors.fullnames}</div>
                                ) : null}
                        </div>
                    </div>

                    <div className="service-quotation-small-inputs">
                        <div className="service-quotation-small-input-group">
                            <label>Your company</label>
                            <input type="text" placeholder="Your company name here..." name="company" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.company} required/>
                                {formik.touched.company && formik.errors.company ? (
                                    <div className="error">{formik.errors.company}</div>
                                ) : null}
                        </div>

                        <div className="service-quotation-small-input-group">
                            <label>Your position</label>
                            <input type="text" placeholder="Eg CEO, CTO, Manager, etc..." name="position" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.position} required/>
                                {formik.touched.position && formik.errors.position ? (
                                    <div className="error">{formik.errors.position}</div>
                                ) : null}
                        </div>
                    </div>

                    <div className="service-quotation-small-inputs">
                        <div className="service-quotation-small-input-group">
                            <label>Weight Unit</label>
                                <select type="text"  name="unit" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.unit} required>
                                    <option value="" disabled label="Please select an option" />
                                    <option value="kilograms" label="Kilograms" />
                                    <option value="pounds" label="Pounds"/>
                                    <option value="grams" label="Grams"/>
                                    <option value="litres" label="Litres"/>
                                </select>
                                {formik.touched.unit && formik.errors.unit ? (
                                    <div className="error">{formik.errors.unit}</div>
                                ) : null}
                        </div>
                        <div className="service-quotation-small-input-group">
                            <label>Weight</label>
                            <input type="number" placeholder="The weight of the product..." name="weight" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.weight} required/>
                                {formik.touched.weight && formik.errors.weight ? (
                                    <div className="error">{formik.errors.weight}</div>
                                ) : null}
                        </div>
                    </div>
                    
                    <div className="service-quotation-small-inputs">
                        <div className="service-quotation-small-input-group">
                            <label>Country</label>
                            <input type="text" placeholder="What is your country..." name="country" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country} required/>
                                {formik.touched.country && formik.errors.country ? (
                                    <div className="error">{formik.errors.country}</div>
                                ) : null}                            
                        </div>
                        <div className="service-quotation-small-input-group">
                            <label>City</label>
                            <input type="text" placeholder="What is your city..." name="city" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} required/>
                                {formik.touched.city && formik.errors.city ? (
                                    <div className="error">{formik.errors.city}</div>
                                ) : null}            
                        </div>
                    </div>

                    <div className="service-quotation-small-inputs">

                        <div className="service-quotation-small-input-group">
                            <label>Product Name</label>
                            <input type="text" placeholder="EProduct name..." name="productname" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.productname} required/>
                                {formik.touched.productname && formik.errors.productname ? (
                                    <div className="error">{formik.errors.productname}</div>
                                ) : null}
                        </div>
                        <div className="service-quotation-small-input-group">
                            <label>Product Amount</label>
                            <input type="number" placeholder="Product amount..." name="quantity" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.quantity} required/>
                                {formik.touched.quantity && formik.errors.quantity ? (
                                    <div className="error">{formik.errors.quantity}</div>
                                ) : null}
                        </div>
                    </div>

                    <div className="service-quotation-small-inputs">
                        <div className="service-quotation-small-input-group">
                            <label>Product Type</label>
                            <select type="text"  name="producttype" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.producttype} required>
                                    <option value="" disabled label="Please select an option" />
                                    <option value="solid" label="Solid" defaultValue/>
                                    <option value="liquid" label="Liquid"/>
                                    <option value="gas" label="Gas"/>
                                </select>
                                {formik.touched.producttype && formik.errors.producttype ? (
                                    <div className="error">{formik.errors.producttype}</div>
                                ) : null}                         
                        </div>
                        <div className="service-quotation-small-input-group">
                            <label> Email</label>
                            <input type="email" placeholder="email" name="email" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.email} required/>
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="error">{formik.errors.email}</div>
                                ) : null}
                        </div>
                    </div>

                    <div className="service-quotation-small-inputs">
                        <div className="service-quotation-small-input-group">
                            <label>Storage City</label>
                            <input type="text" placeholder="Storage city here..." name="storagecity" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.storagecity} required/>
                                {formik.touched.storagecity && formik.errors.storagecity ? (
                                    <div className="error">{formik.errors.storagecity}</div>
                                ) : null}
                        </div>
                        <div className="service-quotation-small-input-group">
                            <label>Storage Country</label>
                            <input type="text" placeholder="Storage country here..." name="storagecountry" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.storagecountry} required/>
                                {formik.touched.storagecountry && formik.errors.storagecountry ? (
                                    <div className="error">{formik.errors.storagecountry}</div>
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
                    <button type="submit">
                        Submit <FontAwesomeIcon icon={faPaperPlane}/>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default StorageQuotationForm
