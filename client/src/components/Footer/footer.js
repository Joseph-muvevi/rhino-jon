import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faMap } from "@fortawesome/free-regular-svg-icons";
import {
  faAddressBook,
  faHouseUser,
  faInfoCircle,
  faMailBulk,
  faMapMarkerAlt,
  faPhoneAlt,
  faShippingFast,
  faTrailer,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-logo">
              LOGO
              <h3 className="footer-logo-text">Jon Prime Metals</h3>
            </div>
            <div className="footer-left-content">
              <p className="footer-social-media-txt">For more follow us on</p>
              <div className="footer-social-icons">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
              <div className="footer-input-group">
                <label>Subscibe to our Newsletter</label>
                <div className="footer-inputs">
                  <input
                    type="email"
                    name="email"
                    placeholder="Subscribe to our Newsletter"
                  />
                  <button className="subscribe" >Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-top-middle">
            <h3 className="footer-title">Contacts</h3>
            <ul className="footer-ul">
              <li className="footer-li">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Addess 1
              </li>
              <li className="footer-li">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                Addess 2
              </li>
              <li className="footer-li">
                <FontAwesomeIcon icon={faPhoneAlt} />
                Tel 1
              </li>
              <li className="footer-li">
                <FontAwesomeIcon icon={faPhoneAlt} />
                Tel 2
              </li>
              <li className="footer-li">
                <FontAwesomeIcon icon={faMailBulk} /> Email 1
              </li>
              <li className="footer-li">
                <FontAwesomeIcon icon={faMailBulk} />
                Email 2
              </li>
            </ul>
          </div>
          <div className="footer-top-right">
            <h3 className="footer-title">Utility Links</h3>
            <ul className="footer-ul">
              <li className="footer-li">
                <FontAwesomeIcon icon={faHouseUser} /> Home
              </li>
              <li className="footer-li">
                <FontAwesomeIcon icon={faInfoCircle} /> About
              </li>
              <li className="footer-li">
                <FontAwesomeIcon icon={faWarehouse} /> Products
              </li>
              <li className="footer-li">
                <FontAwesomeIcon icon={faShippingFast} /> Trucking
              </li>
              <li className="footer-li">
                <FontAwesomeIcon icon={faAddressBook} /> Contact
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <FontAwesomeIcon icon={faCopyright} />
          Copyright jonPrimeMetals 2021
        </div>
      </div>
    </div>
  );
};

export default Footer;
