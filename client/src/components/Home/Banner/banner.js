import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./banner.css";
import gold from "../../../assets/gold2.jpg"

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-main-content">
          <div className="banner-left">
            <h3 className="banner-left-h3">
              Rhino <span style={{ color: "#FF9C25" }}>Jon Prime</span> Metals
            </h3>
            <p className="banner-left-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <br/>
            <button>More </button>
          </div>
          <div className="banner-right">
            <img src={gold} alt="Rhino Jon gold" className="home-gold"/>
          </div>
        </div>
        <div className="banner-social-media">
          <FontAwesomeIcon className="fontawesome-icon"  icon={faFacebookSquare} size="2x" />
          <FontAwesomeIcon className="fontawesome-icon"  icon={faTwitterSquare} size="2x" />
          <FontAwesomeIcon className="fontawesome-icon"  icon={faInstagramSquare} size="2x" />
          <FontAwesomeIcon className="fontawesome-icon" icon={faLinkedin} size="2x" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
