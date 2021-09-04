import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faAddressBook,
  faHouseUser,
  faInfoCircle,
  faMailBulk,
  faMapMarkerAlt,
  faPhoneAlt,
  faShippingFast,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../../assets/Rhino card logo - PNG.png";
import "./HomeFooter.css";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const Homefooter = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().min(6).max(100),
    }),
    onSubmit: (value, { resetForm }) => {
      try {
        axios
          .post("http://localhost:8080/api/emails", value)
          .then(console.log(value))
          .catch((err) => console.log(err));
        resetForm({ initialValues: "" });
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="homefooter">
      <div className="homefooter-content">
        <div className="homefooter-top">
          <div className="homefooter-top-left">
            <div className="homefooter-logo">
              <img src={logo} alt="Rhino jon logo" className="f-logo" />
              <h3 className="homefooter-logo-text">Jon Prime Metals</h3>
            </div>
            <div className="homefooter-left-content">
              <p className="homefooter-social-media-txt">
                For more follow us on
              </p>
              <div className="homefooter-social-icons">
                <FontAwesomeIcon size="2x" icon={faFacebook} />
                <FontAwesomeIcon size="2x" icon={faTwitter} />
                <FontAwesomeIcon size="2x" icon={faInstagram} />
                <FontAwesomeIcon size="2x" icon={faLinkedinIn} />
              </div>
              <div className="homefooter-input-group">
                <label>Subscibe to our Newsletter</label>
                <div className="homefooter-inputs">
                  <form onSubmit={formik.handleSubmit}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Subscribe to our Newsletter"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <button type="submit" className="subscribe">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="homefooter-top-middle">
            <h3 className="homefooter-title">Contacts</h3>
            <ul className="homefooter-ul">
              <li className="homefooter-li">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Riverside drive
                Nairobi, Kenya
              </li>
              <li className="homefooter-li">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                Addess 2
              </li>
              <li className="homefooter-li">
                <FontAwesomeIcon icon={faPhoneAlt} />
                +254 753 999 444
              </li>
              <li className="homefooter-li">
                <FontAwesomeIcon icon={faPhoneAlt} />
                Tel 2
              </li>
              <li className="homefooter-li">
                <FontAwesomeIcon icon={faMailBulk} />
                info@rhinojonprimemetals.com
              </li>
              <li className="homefooter-li">
                <FontAwesomeIcon icon={faMailBulk} />
                info@rhinojonprimemetals.com
              </li>
            </ul>
          </div>
          <div className="homefooter-top-right">
            <h3 className="homefooter-title">Utility Links</h3>
            <ul className="homefooter-ul">
              <li className="homefooter-li">
                <FontAwesomeIcon icon={faHouseUser} /> Home
              </li>
              <li className="homefooter-li">
                <FontAwesomeIcon icon={faInfoCircle} /> About
              </li>
              <li className="homefooter-li">
                <FontAwesomeIcon icon={faWarehouse} /> Products
              </li>
              <li className="homefooter-li">
                <FontAwesomeIcon icon={faShippingFast} /> Trucking
              </li>
              <li className="homefooter-li">
                <FontAwesomeIcon icon={faAddressBook} /> Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="homefooter-bottom">
        <FontAwesomeIcon icon={faCopyright} />
        Copyright Rhino Jon Prime Metals 2021
      </div>
    </div>
  );
};

export default Homefooter;
