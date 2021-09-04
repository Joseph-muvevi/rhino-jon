import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
import "./banner.css";
// import gold from "../../../assets/gold2.jpg"
import { Link } from "react-router-dom";
import video from "../../../assets/compressed background image.mp4"

const Banner = () => {
  return (
    <div className="the-banner">
      <div className="banner">
        {/* <div className="banner-content">
          <div className="banner-main-content">
            <div className="banner-left">
              <h3 className="banner-left-h3">
                <span style={{ color: "white" }}>Rhinojohn Prime Metal</span>
              </h3>
              <p className="banner-left-p">
                Rhinojohn Prime Metal Internatonal Limited is a global company
                that has grown to become one of the leading players in the
                precious metals and stones value chain. We focus on trading,
                safekeeping, logistics and delivery of these valuable products 
              </p>
              <p className="banner-left-p">
                Our
                team of globally exposed experts have a combined experience of
                more than 20 years in this trade and guarantee continous
                transactions. They will link you to the right actors and dealers in the trade;
                from Miners (Artisanal and Industrial), Buyers, Sellers, Intermediaries, 
                Refiners and Gemologist.
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
                color="#4267B2"
                icon={faFacebook}
                size="2x"
              />
              <FontAwesomeIcon
                className="fontawesome-icon"
                color="#00acee"
                icon={faTwitter}
                size="2x"
              />
              <FontAwesomeIcon
                className="fontawesome-icon"
                icon={faInstagram}
                color="#bc2a8d"
                size="2x"
              />
              <FontAwesomeIcon
                className="fontawesome-icon"
                icon={faLinkedin}
                color="#0077b5"
                size="2x"
              />
            </div>
          </div>
          <br />
        </div> */}
        <iframe autoplay loop controls title="Rhinojohn background video" className="banner-video" type="video/mp4" src={video}/>
      </div>
    </div>
  );
};

export default Banner;
