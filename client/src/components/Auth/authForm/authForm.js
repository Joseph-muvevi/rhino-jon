import React, {useState} from 'react'
import * as Yup from "yup";
import { useFormik } from "formik";
import login from "../../../assets/ship2.jpg"
import "./authForm.css"
import { Link } from 'react-router-dom';
import axios from "axios"
import authHeader from "./AuthServices/authheader"
import AuthService from "./AuthServices/authservice"


const AuthForm = () => {


    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .min(5)
            .max(100)
            .required(),
          password: Yup.string()
            .min(6)
            .max(100)
            .required(),
        }),
        onSubmit: (values, {resetForm}) => {
          axios.post("http://localhost:8080/api/login", values)
            .then((res) => {
              console.log(res)
              // localStorage.setItem(values)
              if (res.data) {
                localStorage.setItem("user", JSON.stringify(res.data));
              }
             
            })
            .catch (er => console.log(er))
        },
      });
    
    return (
        <div className="authform">
            <div className="auth-content">
                <div className="auth-left">
                    <img className="auth-form-image" src={login} alt="Rhino jon gold shippment"/>
                </div>
                <form onSubmit={formik.handleSubmit} className="auth-form">
                  <div className="form-group">
                      <label>Email</label>
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        name="email"
                        required
                        type="email"
                        placeholder="Enter your email here..."
                      />
                      {formik.touched.email && formik.errors.email ? (
                      <div className="error">{formik.errors.email}</div>
                      ) : null}
                  </div>
                  <div className="form-group">
                      <label>password</label>
                      <input
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      name="password"
                      required
                      type="password"
                      placeholder="Enter your password here..."
                      />
                      {formik.touched.password && formik.errors.password ? (
                      <div className="error">{formik.errors.password}</div>
                      ) : null}
                  </div>
                  <p className="form-alt-p">
                    Forgot your password? <Link to="/reset">Reset now!!</Link>
                  </p>
                  <br/>
                  <button>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default AuthForm
