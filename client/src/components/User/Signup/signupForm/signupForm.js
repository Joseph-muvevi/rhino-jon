import React from 'react'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import * as Yup from "yup"
import golden from "../../../../assets/gold1.jpg"
import "./signupForm.css"
import { Link } from 'react-router-dom'
import axios from "axios"

const SignupForm = () => {

    const formik = useFormik({
        initialValues : {
            firstname:  "",
            lastname: "",
            password: "",
            city: "",
            country: "",
            email: "",
            accountCode : "",
            telephone: ""
        },
        valemailationSchema: Yup.object().shape({
            firstname : Yup.string()
                .required("This field is required")
                .min(5, "Minimum number allowed is 5")
                .max(100, "maximum characters allowed are 100"),
            lastname : Yup.string()
                .required("This field is required")
                .min(5, "Minimum characters allowed are 5")
                .max(100, "maximum characters allowed are 100"),
            password : Yup.string()
                .required("This field is required")
                .min(6, "Minimum characters allowed are 4")
                .max(200, "maximum characters allowed are 200"),
            city : Yup.date()
                .required("This field is required")
                .min(3, "Minimum characters allowed are 5")
                .max(100, "maximum characters allowed are 100"),
            country : Yup.string()
                .required("This field is required")
                .min(3, "Minimum characters allowed are 4")
                .max(100, "maximum characters allowed are 200"),
            email : Yup.string()
                .required("This field is required")
                .min(6, "Minimum characters allowed are 4")
                .max(200, "maximum characters allowed are 200"),
            accountCode : Yup.string()
                .required("This field is required")
                .min(6, "Minimum characters allowed are 4")
                .max(200, "maximum characters allowed are 200"),
            telephone : Yup.string()
                .required("This field is required")
                .min(7, "Minimum characters allowed are 4")
                .max(30, "maximum characters allowed are 200"),
            isAdmin: Yup.boolean()
                // .required("This field is required")
        }),
        onSubmit: (values) => {
            axios.post("http://localhost:8080/api/users", values)
                .then(console.log(values))
                // .then(alert(JSON.stringify(values, null, 2)))
                .catch(err => console.log(err))
        }
    })

    return (
        <div className="signup-form">
            <div className="signup-form-content">
                <div className="signup-left">
                    <img className="signup-form-image" src={golden} alt="Rhino jon gold shippment"/>
                </div>

                <form onSubmit={formik.handleSubmit} >

                    <div className="signup-small-inputs">
                        <div className="signup-small-input-group">
                            <label>first name</label>
                            <input type="text" placeholder="firstname here..." name="firstname" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} required/>
                                {formik.touched.firstname && formik.errors.firstname ? (
                                    <div className="error">{formik.errors.firstname}</div>
                                ) : null}
                        </div>
                        <div className="signup-small-input-group">
                            <label>last name</label>
                            <input type="text" placeholder="lastname here..." name="lastname" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} required/>
                                {formik.touched.lastname && formik.errors.lastname ? (
                                    <div className="error">{formik.errors.lastname}</div>
                                ) : null}
                        </div>
                    </div>

                    <div className="signup-small-inputs">
                        <div className="signup-small-input-group">
                            <label>Country</label>
                            <input type="text" placeholder="country here..." name="country" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country} required/>
                                {formik.touched.country && formik.errors.country ? (
                                    <div className="error">{formik.errors.country}</div>
                                ) : null}                            
                        </div>

                        <div className="signup-small-input-group">
                            <label>City</label>
                            <input type="text" placeholder="your city here..." name="city" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} required/>
                                {formik.touched.city && formik.errors.city ? (
                                    <div className="error">{formik.errors.city}</div>
                                ) : null}
                        </div>
                    </div>
                    
                    <div className="signup-small-inputs">

                        <div className="signup-small-input-group">
                            <label>Account Code</label>
                            <input type="text" placeholder="your ccount code here..." name="accountCode" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.accountCode} required/>
                                {formik.touched.accountCode && formik.errors.accountCode ? (
                                    <div className="error">{formik.errors.accountCode}</div>
                                ) : null}                            
                        </div>
                        <div className="signup-small-input-group">
                            <label>telephone number</label>
                            <input type="tel" placeholder="your phone number here..." name="telephone" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.telephone} required/>
                                {formik.touched.telephone && formik.errors.telephone ? (
                                    <div className="error">{formik.errors.telephone}</div>
                                ) : null}
                        </div>

                    </div>

                    <div className="signup-small-inputs">
                        <div className="signup-small-input-group">
                            <label>Email</label>
                            <input type="email" placeholder="your email here..." name="email" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} required/>
                                {formik.touched.city && formik.errors.city ? (
                                    <div className="error">{formik.errors.city}</div>
                                ) : null}            
                        </div>
                        <div className="signup-small-input-group">
                            <label>password</label>
                            <input type="password" placeholder="your password here..." name="password" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} required/>
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="error">{formik.errors.password}</div>
                                ) : null}
                        </div>
                    </div>
                    <div className="signup-small-inputs">
                        <div className="signup-small-input-group">
                            <label>Is Admin</label>
                            <input type="checkbox" name="isAdmin"
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.isAdmin}/>
                                {formik.touched.isAdmin && formik.errors.isAdmin ? (
                                    <div className="error">{formik.errors.isAdmin}</div>
                                ) : null}
                        </div>
                    </div>

                    <br/>
                    <button type="submit">
                        Submit <FontAwesomeIcon icon={faPaperPlane}/>
                    </button>
                    <br/>
                    <p className="form-alt-p">
                        Already have account? <Link to="/auth">Sign in here</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignupForm
