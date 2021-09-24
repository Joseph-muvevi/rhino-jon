import React from "react";
import "./banner.css";
import video from "../../../assets/Rhinojon background Laptop compressed.mp4";

const Banner = () => {
  return (
    <div className="the-homepage-banner">
      <div className="the-homepage-banner">

        <video autoPlay loop  className="banner-video">
          <source className="the-banner-video" type="video/mp4" src={video} />
        </video>
      </div>
    </div>
  );
};

export default Banner;
