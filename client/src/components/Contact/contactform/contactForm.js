import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup"
import React from "react";
import "./contactForm.css"

const ContactForm = () => {

    // const contactSchema = {

    // }

    const formik = useFormik({
        initialValues : {
            fullname: "",
            email: "",
            company: "",
            telephone: "",
            message: ""
        },
        validationSchema: Yup.object().shape({
            fullname: Yup.string()
              .required("This fullname field is required")
              .min(6, "Minimum characters allowed are 4")
              .max(200, "maximum characters allowed are 200"),
            email: Yup.string()
                .email("Please enter a valid email")
                .min(7, "Minimum characters allowed is 4")
                .max(100, "Maximum character allowed is 100")
                .required("This email field is required"),
            company: Yup.string()
                .min(6, "Minimum characters allowed are 4")
                .max(100, "Maximum characters allowed are 100"),
            telephone: Yup.string()
                .required("This message field is required")
                .min(5, "Minimum characters allowed are 5")
                .max(30, "Maximum characters allowed are 30"),
            message: Yup.string()
                .required("This message field is required")
                .min(20, "Minimum characters allowed are 20")
                .max(2000, "Maximum characters allowed are 2000"),
        }),
        onSubmit: (message, {resetForm}) => {
            alert(JSON.stringify(message, null, 2));
            alert("Your message has been sent successfully...")
            resetForm({message: ""})
          },
    })

  return (
    <div className="contact-form">
      <div className="contact-form-content">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.840158678163!2d36.784767673343126!3d-1.2687476842295144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f175ec9670c1b%3A0xc5f4c49c68adcad9!2sGerman%20Embassy%2FRiverside%20Paddocks!5e0!3m2!1sen!2ske!4v1628816443568!5m2!1sen!2ske"
            className="iframe"
            allowFullScreen=""
            loading="lazy"
            title="Rhino jon map"
          ></iframe>
        </div>
        <form onSubmit={formik.handleSubmit} className="the-contact-form">
          <div className="small-inputs">
            <div className="contact-form-group">
              <label>FullNames</label>
              <input
                type="text"
                value={formik.values.fullname}
                name="fullname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your full names..."
                required
              />
                 {formik.touched.fullname && formik.errors.fullname ? (
                    <div className="error">{formik.errors.fullname}</div>
                 ) : null}
            </div>
            <div className="contact-form-group">
              <label>Email</label>
              <input type="text"
                value={formik.values.email}
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email..." 
                required />
                {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                 ) : null}
            </div>
          </div>
          <div className="small-inputs">
            <div className="contact-form-group">
              <label>Company name</label>
              <input type="text"
                value={formik.values.company}
                name="company"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your company name..." />
                {formik.touched.company && formik.errors.company ? (
                    <div className="error">{formik.errors.company}</div>
                 ) : null}
            </div>
            <div className="contact-form-group">
              <label>Telephone</label>
              <input
                type="tel"
                value={formik.values.telephone}
                name="telephone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your telephone number"
                required
              />
                {formik.touched.telephone && formik.errors.telephone ? (
                    <div className="error">{formik.errors.telephone}</div>
                 ) : null}
            </div>
          </div>
          <div className="contact-textarea">
            <label>Message</label>
            <textarea
              type="text"
              value={formik.values.message}
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your message..."
              required
            />
                {formik.touched.message && formik.errors.message ? (
                <div className="error">{formik.errors.message}</div>
                ) : null}
          </div>
          <br/>
          <button>
            Submit <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
