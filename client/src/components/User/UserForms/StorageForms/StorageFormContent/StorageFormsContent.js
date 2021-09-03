import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import * as Yup from "yup"
import React from 'react'
import "../StorageForms.css"
// import axios from "axios"


const StorageFormsContent = () => {

    const formik = useFormik({
        initialValues : {
            fullnames: "",
            email: "",
            company: "",
            storagecity: "",
            storagecountry: "",
            warehousetype: "",
            weight: "",
            weightunit: "",
            producttype: "",
            pieces: "",
            datein: "",
            timein: "",
            notes: ""
        },
        validationSchema: Yup.object().shape({
            fullnames : Yup.string()
                .required("This field is required")
                .min(3, "Minimum characters allowed are 3")
                .max(200, "maximum characters allowed are 200"),
            email : Yup.string()
                .required("This field is required")
                .min(3, "Minimum characters allowed are 3")
                .max(200, "maximum characters allowed are 200"),
            company : Yup.string()
                .required("This field is required")
                .min(3, "Minimum character allowed is 2")
                .max(100, "maximum characters allowed are 100"),
            storagecity : Yup.string()
                .required("This field is required")
                .min(3, "Minimum characters allowed are 3")
                .max(50, "maximum characters allowed are 50"),
            storagecountry : Yup.string()
                .required("This field is required")
                .min(3, "Minimum characters allowed are 3")
                .max(50, "maximum characters allowed are 50"),
            warehousetype : Yup.string()
                .required("This field is required"),
            weight : Yup.number()
                .required("This field is required")
                .min(1, "Minimum product allowed allowed is 1")
                .max(5000, "maximum characters allowed are 5000"),
            weightunit : Yup.string()
                .required("This field is required"),
            producttype : Yup.string()
                .required("This field is required"),
            pieces: Yup.number()
                .required()
                .min(1, "the minimum value shuld be 1")
                .max(50000, "Maximum value should me 50000"),
            datein : Yup.string()
                .required("This field is required")
                .min(3, "Minimum characters allowed are 3")
                .max(200, "maximum characters allowed are 200"),
            timein: Yup.string()
                .required()
                .min(1, "Minimum product allowed allowed is 1")
                .max(50000, "maximum characters allowed are 50000"),
            dateout: Yup.string()
                .required()
                .min(1, "Minimum product allowed allowed is 1")
                .max(50000, "maximum characters allowed are 50000"),
            dateout: Yup.string()
                .required()
                .min(1, "Minimum product allowed allowed is 1")
                .max(50000, "maximum characters allowed are 50000"),
            notes : Yup.string()
                .required("This field is required")
                .min(20, "Minimum characters allowed are 4")
                .max(2000, "maximum characters allowed are 200"),
        }),
        onSubmit: (values, {resetForm}) => {
            // axios.post("http://localhost:8080/api/goods", values)
            //     .then(console.log(values))
            //     .catch(err => console.log(err))
            alert(JSON.stringify(values, null, 2))
            console.log(values)
            resetForm({values: ""})
        }
    })

    return (
        <div className="logistics-quotation-form">
            <div className="logistics-quotation-form-content">


                <form onSubmit={formik.handleSubmit} className="the-logistics-quotation-form">

                    <div className="logistics-quotation-small-inputs">
                        <div className="logistics-quotation-small-input-group">
                            <label>Your fullnames</label>
                            <input type="text" placeholder="Your fullnames here..." name="fullnames" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fullnames} required/>
                                {formik.touched.fullnames && formik.errors.fullnames ? (
                                    <div className="error">{formik.errors.fullnames}</div>
                                ) : null}
                        </div>
                        <div className="logistics-quotation-small-input-group">
                            <label> Email</label>
                            <input type="email" placeholder="email" name="email" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.email} required/>
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="error">{formik.errors.email}</div>
                                ) : null}
                        </div>
                        <div className="logistics-quotation-small-input-group">
                            <label> Company</label>
                            <input type="text" placeholder="company" name="company" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.company} required/>
                                {formik.touched.company && formik.errors.company ? (
                                    <div className="error">{formik.errors.company}</div>
                                ) : null}
                        </div>
                    </div>

                    <div className="logistics-quotation-small-inputs">
                        <div className="logistics-quotation-small-input-group">
                            <label>Weight unit</label>
                                <select type="text"  name="weightunit" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.weightunit} required>
                                    <option value="" disabled label="Please select an option" />
                                    <option value="kilograms" label="Kilograms" />
                                    <option value="pounds" label="Pounds"/>
                                    <option value="grams" label="Grams"/>
                                    <option value="tonnes" label="Tonnes"/>
                                </select>
                                {formik.touched.weightunit && formik.errors.weightunit ? (
                                    <div className="error">{formik.errors.weightunit}</div>
                                ) : null}
                        </div>
                        <div className="logistics-quotation-small-input-group">
                            <label>Weight</label>
                            <input type="number" placeholder="The weight of the item..." name="weight" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.weight} required/>
                                {formik.touched.weight && formik.errors.weight ? (
                                    <div className="error">{formik.errors.weight}</div>
                                ) : null}
                        </div>
                        <div className="logistics-quotation-small-input-group">
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
                    </div>
                    
                    <div className="logistics-quotation-small-inputs">
                        <div className="logistics-quotation-small-input-group">
                            <label>Storage city</label>
                            <input type="text" placeholder="What is your city..." name="storagecity" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.storagecity} required/>
                                {formik.touched.storagecity && formik.errors.storagecity ? (
                                    <div className="error">{formik.errors.storagecity}</div>
                                ) : null}            
                        </div>
                        <div className="logistics-quotation-small-input-group">
                            <label>Storage country</label>
                            <input type="text" placeholder="What is your country..." name="storagecountry" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.storagecountry} required/>
                                {formik.touched.storagecountry && formik.errors.storagecountry ? (
                                    <div className="error">{formik.errors.storagecountry}</div>
                                ) : null}                            
                        </div>
                        <div className="logistics-quotation-small-input-group">
                            <label> Pieces </label>
                            <input type="number" placeholder="pieces" name="pieces" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.pieces} required/>
                                {formik.touched.pieces && formik.errors.pieces ? (
                                    <div className="error">{formik.errors.pieces}</div>
                                ) : null}
                        </div>
                    </div>

                    <div className="logistics-quotation-small-inputs">

                        <div className="logistics-quotation-small-input-group">
                            <label>Date in</label>
                            <input type="date" placeholder="Date in..." name="datein" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.datein} required/>
                                {formik.touched.datein && formik.errors.datein ? (
                                    <div className="error">{formik.errors.datein}</div>
                                ) : null}
                        </div>
                        <div className="logistics-quotation-small-input-group">
                            <label>Time in</label>
                            <input type="time" placeholder="Time in..." name="timein" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.timein} required/>
                                {formik.touched.timein && formik.errors.timein ? (
                                    <div className="error">{formik.errors.timein}</div>
                                ) : null}
                        </div>
                        <div className="logistics-quotation-small-input-group">
                            <label> Warehouse Type </label>
                            <select type="text"  name="warehousetype" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.warehousetype} required>
                                    <option value="" disabled label="Please select an option" />
                                    <option value="distribution" label="Solid" defaultValue/>
                                    <option value="climatecontrolled" label="Liquid"/>
                                    <option value="public" label="Public"/>
                                    <option value="private" label="Private"/>
                                    <option value="bonded" label="Bonded"/>
                                </select>
                                {formik.touched.warehousetype && formik.errors.warehousetype ? (
                                    <div className="error">{formik.errors.warehousetype}</div>
                                ) : null}  
                        </div>
                    </div>

                    <div className="logistics-quotation-small-inputs">

                        <div className="logistics-quotation-small-input-group">
                            <label>Date out</label>
                            <input type="date" placeholder="Date in..." name="dateout" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.dateout} required/>
                                {formik.touched.dateout && formik.errors.dateout ? (
                                    <div className="error">{formik.errors.dateout}</div>
                                ) : null}
                        </div>
                        <div className="logistics-quotation-small-input-group">
                            <label>Time out</label>
                            <input type="time" placeholder="Time in..." name="timeout" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.timeout} required/>
                                {formik.touched.timeout && formik.errors.timeout ? (
                                    <div className="error">{formik.errors.timeout}</div>
                                ) : null}
                        </div>
                    </div>

                    <div className="contact-textarea">
                        <label>Notes</label>
                        <textarea type="text" name="notes" placeholder="Little notess eg weight, size, color, etc" 
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.notes} required/>
                            {formik.touched.notes && formik.errors.notes ? (
                                    <div className="error">{formik.errors.notes}</div>
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

export default StorageFormsContent
