import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
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
                icon={faFacebookSquare}
                size="2x"
              />
              <FontAwesomeIcon
                className="fontawesome-icon"
                icon={faTwitterSquare}
                size="2x"
              />
              <FontAwesomeIcon
                className="fontawesome-icon"
                icon={faInstagramSquare}
                size="2x"
              />
              <FontAwesomeIcon
                className="fontawesome-icon"
                icon={faLinkedin}
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
