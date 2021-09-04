import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./banner.css";
// import gold from "../../../assets/gold2.jpg"
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="the-banner">
      <div className="banner">
        <div className="banner-content">
          <div className="banner-main-content">
            <div className="banner-left">
              <h3 className="banner-left-h3">
                <span style={{ color: "white" }}>Rhino Jon Prime  Metals</span>
              </h3>
              <p className="banner-left-p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <br />
              <Link to="/about">
                <button>More </button>
              </Link>
            </div>
          </div>
          <div className="banner-social">
            <div className="banner-social-media">
              <FontAwesomeIcon
                className="fontawesome-icon"
                color ="#4267B2"
                icon={faFacebook}
                size="2x"
              />
              <FontAwesomeIcon
                className="fontawesome-icon"
                color ="#00acee"
                icon={faTwitter}
                size="2x"
              />
              <FontAwesomeIcon
                className="fontawesome-icon"
                icon={faInstagram}
                color ="#bc2a8d"
                size="2x"
                />
              <FontAwesomeIcon
                className="fontawesome-icon"
                icon={faLinkedin}
                color ="#0077b5"
                size="2x"
              />
            </div>
          </div>
          <br />
        </div>
        <div className="banner-right"></div>
      </div>
    </div>
  );
};

export default Banner;
