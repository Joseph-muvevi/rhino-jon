import React from 'react'
import "./AboutBanner.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "../../../assets/container.jpg"
import image2 from "../../../assets/warehousing.jpg"
import image3 from "../../../assets/cargoplane 1.jpg"
import image4 from "../../../assets/tradingbuysell.jpg"
import image5 from "../../../assets/diamond.jpg"
import image6 from "../../../assets/miningtools.jpg"

const AboutBanner = () => {

    const settings = {
        showArrows: false,
        swipeable: true,
        stopOnHover: true,
        autoPlay: true,
        infiniteLoop: true,
        transitionTime: 1000,
        showIndicators: false,
        useKeyboardArrows: true,
        emulateTouch: true,
        showThumbs: false,
    }

    return (

        
        <Carousel  {...settings}>
            <div className="about-banner-one">
                <div className="about-banner-content">
                    {/* <h3 className="about-banner-h3">
                        About us
                    </h3> */}
                    <img className="about-image" alt="" src={image1}/>
                        
                </div>

            </div>
            <div className="about-banner-two">
                <div className="about-banner-content">
                    {/* <h3 className="about-banner-h3">
                        About us
                    </h3> */}
                    <img className="about-image" alt="" src={image2}/>
                </div>

            </div>
            <div className="about-banner-three">
                <div className="about-banner-content">
                    {/* <h3 className="about-banner-h3">
                        About us
                    </h3> */}
                    <img className="about-image" alt="" src={image3}/>
                </div>
            </div>
            <div className="about-banner-four">
                <div className="about-banner-content">
                    {/* <h3 className="about-banner-h3">
                        About us
                    </h3> */}
                    <img className="about-image" alt="" src={image4}/>
                </div>

            </div>
            <div className="about-banner-five">
                <div className="about-banner-content">
                    {/* <h3 className="about-banner-h3">
                        About us
                    </h3> */}
                    <img className="about-image" alt="" src={image5}/>
                        
                </div>
            </div>
            <div className="about-banner-six">
                <div className="about-banner-content">
                    {/* <h3 className="about-banner-h3">
                        About us
                    </h3> */}
                    <img className="about-image" alt="" src={image6}/>
                        
                </div>
            </div>
        </Carousel>

    )
}

export default AboutBanner
