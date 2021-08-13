import React from 'react'
import * as Yup from "yup";
import { useFormik } from "formik";
import "./authForm.css"


const AuthForm = () => {

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .email()
            .min(5, "Too little charachters for that")
            .max(150, "Thats a very long email")
            .required("This email field is required"),
          password: Yup.string().min(8).max(150).required(),
        }),
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    
    return (
        <div className="authform">
            <div className="auth-content">
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
                <br/>
                <button>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default AuthForm
