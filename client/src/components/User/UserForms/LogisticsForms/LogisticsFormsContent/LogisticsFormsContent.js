import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import "../LogisticsForms.css";
import axios from "axios";

const LogisticsFormsContent = () => {
  const formik = useFormik({
    initialValues: {
      fullnames: "",
      email: "",
      company: "",
      departurecity: "",
      departurecountry: "",
      arrivalcity: "",
      arrivalcountry: "",
      logisticstype: "",
      weight: "",
      weightunit: "",
      producttype: "",
      pieces: "",
      departuredate: "",
      departuretime: "",
      arrivaldate: "",
      arrivaltime: "",
      trackno: "",
      notes: "",
    },
    validationSchema: Yup.object().shape({
      fullnames: Yup.string().required().min(3).max(100),
      email: Yup.string().required().min(3).max(100),
      company: Yup.string().required().min(3).max(100),
      departurecity: Yup.string().required().min(3).max(50),
      departurecountry: Yup.string().required().min(3).max(50),
      arrivalcity: Yup.string().required().min(3).max(50),
      arrivalcountry: Yup.string().required().min(3).max(50),
      logisticstype: Yup.string().required().min(3).max(50),
      weight: Yup.number().required().min(1).max(50000),
      weightunit: Yup.string().required().min(3).max(50),
      producttype: Yup.string().required().min(3).max(50),
      pieces: Yup.number().required().min(1).max(50000),
      departuredate: Yup.string().required().min(3).max(100),
      departuretime: Yup.string().required().min(3).max(100),
      arrivaldate: Yup.string().required().min(3).max(100),
      arrivaltime: Yup.string().required().min(3).max(100),
      trackno: Yup.string().required().min(3).max(100),
      notes: Yup.string().required().min(20).max(2000),
    }),
    onSubmit: (values, { resetForm }) => {
      try {
        axios
          .post("http://localhost:8080/api/logisticsrecords", values)
          .then(console.log(values))
          .catch((err) => console.log(err));
        alert(JSON.stringify(values, null, 2));
        console.log(values);
        resetForm({ values: "" });
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="logistics-quotation-form">
      <div className="logistics-quotation-form-content">
        <form
          onSubmit={formik.handleSubmit}
          className="the-logistics-quotation-form"
        >
          <div className="logistics-quotation-small-inputs">
            <div className="logistics-quotation-small-input-group">
              <label>Your fullnames</label>
              <input
                type="text"
                placeholder="Your fullnames here..."
                name="fullnames"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullnames}
                required
              />
              {formik.touched.fullnames && formik.errors.fullnames ? (
                <div className="error">{formik.errors.fullnames}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label> Email</label>
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                required
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label> Company</label>
              <input
                type="text"
                placeholder="company"
                name="company"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company}
                required
              />
              {formik.touched.company && formik.errors.company ? (
                <div className="error">{formik.errors.company}</div>
              ) : null}
            </div>
          </div>

          <div className="logistics-quotation-small-inputs">
            <div className="logistics-quotation-small-input-group">
              <label>Weight unit</label>
              <select
                type="text"
                name="weightunit"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.weightunit}
                required
              >
                <option value="" disabled label="Please select an option" />
                <option value="kilograms" label="Kilograms" />
                <option value="pounds" label="Pounds" />
                <option value="grams" label="Grams" />
                <option value="tonnes" label="Tonnes" />
              </select>
              {formik.touched.weightunit && formik.errors.weightunit ? (
                <div className="error">{formik.errors.weightunit}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Weight</label>
              <input
                type="number"
                placeholder="The weight of the item..."
                name="weight"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.weight}
                required
              />
              {formik.touched.weight && formik.errors.weight ? (
                <div className="error">{formik.errors.weight}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Product Type</label>
              <select
                type="text"
                name="producttype"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.producttype}
                required
              >
                <option value="" disabled label="Please select an option" />
                <option value="solid" label="Solid" defaultValue />
                <option value="liquid" label="Liquid" />
                <option value="gas" label="Gas" />
              </select>
              {formik.touched.producttype && formik.errors.producttype ? (
                <div className="error">{formik.errors.producttype}</div>
              ) : null}
            </div>
          </div>

          <div className="logistics-quotation-small-inputs">
            <div className="logistics-quotation-small-input-group">
              <label>Departure city</label>
              <input
                type="text"
                placeholder="What is your city..."
                name="departurecity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.departurecity}
                required
              />
              {formik.touched.departurecity && formik.errors.departurecity ? (
                <div className="error">{formik.errors.departurecity}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Departure country</label>
              <input
                type="text"
                placeholder="What is your country..."
                name="departurecountry"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.departurecountry}
                required
              />
              {formik.touched.departurecountry &&
              formik.errors.departurecountry ? (
                <div className="error">{formik.errors.departurecountry}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Departure city</label>
              <input
                type="text"
                placeholder="What is your city..."
                name="arrivalcity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.arrivalcity}
                required
              />
              {formik.touched.arrivalcity && formik.errors.arrivalcity ? (
                <div className="error">{formik.errors.arrivalcity}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Departure country</label>
              <input
                type="text"
                placeholder="What is your country..."
                name="arrivalcountry"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.arrivalcountry}
                required
              />
              {formik.touched.arrivalcountry && formik.errors.arrivalcountry ? (
                <div className="error">{formik.errors.arrivalcountry}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label> Pieces </label>
              <input
                type="number"
                placeholder="pieces"
                name="pieces"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pieces}
                required
              />
              {formik.touched.pieces && formik.errors.pieces ? (
                <div className="error">{formik.errors.pieces}</div>
              ) : null}
            </div>
          </div>

          <div className="logistics-quotation-small-inputs">
            <div className="logistics-quotation-small-input-group">
              <label>DEparture date</label>
              <input
                type="date"
                placeholder="DEparture date..."
                name="departuredate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.departuredate}
                required
              />
              {formik.touched.departuredate && formik.errors.departuredate ? (
                <div className="error">{formik.errors.departuredate}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Time in</label>
              <input
                type="time"
                placeholder="Time in..."
                name="departuretime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.departuretime}
                required
              />
              {formik.touched.departuretime && formik.errors.departuretime ? (
                <div className="error">{formik.errors.departuretime}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label> Warehouse Type </label>
              <select
                type="text"
                name="logisticstype"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.logisticstype}
                required
              >
                <option value="" disabled label="Please select an option" />
                <option value="land" label="Land" defaultValue />
                <option value="sea" label="Sea" />
                <option value="air" label="Air" />
              </select>
              {formik.touched.logisticstype && formik.errors.logisticstype ? (
                <div className="error">{formik.errors.logisticstype}</div>
              ) : null}
            </div>
          </div>

          <div className="logistics-quotation-small-inputs">
            <div className="logistics-quotation-small-input-group">
              <label>Arrival date</label>
              <input
                type="date"
                placeholder="Arrival date..."
                name="arrivaldate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.arrivaldate}
                required
              />
              {formik.touched.arrivaldate && formik.errors.arrivaldate ? (
                <div className="error">{formik.errors.arrivaldate}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Arrival time</label>
              <input
                type="time"
                placeholder="Arrival time..."
                name="arrivaltime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.arrivaltime}
                required
              />
              {formik.touched.arrivaltime && formik.errors.arrivaltime ? (
                <div className="error">{formik.errors.arrivaltime}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Track number</label>
              <input
                type="text"
                placeholder="Track number"
                name="trackno"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.trackno}
                required
              />
              {formik.touched.trackno && formik.errors.trackno ? (
                <div className="error">{formik.errors.trackno}</div>
              ) : null}
            </div>
          </div>

          <div className="contact-textarea">
            <label>Notes</label>
            <textarea
              type="text"
              name="notes"
              placeholder="Little notess eg weight, size, color, etc"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.notes}
              required
            />
            {formik.touched.notes && formik.errors.notes ? (
              <div className="error">{formik.errors.notes}</div>
            ) : null}
          </div>

          <br />
          <button type="submit">
            Submit <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogisticsFormsContent;
