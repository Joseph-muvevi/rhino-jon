import { faGlobeAfrica, faLock, faTachometerAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
// import welcomeImg from "../../../assets/gold1.jpg"
import "./welcome.css"

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="welcome-content">
                <div className="welcome-content-top">
                    <h3 className="welcome-content-top-header">
                        Header Topic
                    </h3>
                    <p className="welcome-content-top-p">
                        About us
                    </p>
                </div>
                <div className="welcome-content-main">
                    <div className="welcome-content-main-top">
                        <p className="welcome-content-main-top-content">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Link to="/quotation">
                            <button className="welcome-button">
                                View More
                            </button>
                        </Link>
                    </div>
                    <br/>
                    <div className="welcome-content-main-bottom">
                        <div className="welcome-content-main-bottom-left">
                            <div className="welcome-bottom-item">
                                <div className="welcome-content-fontawesome-title">
                                    <FontAwesomeIcon className="welcome-icons" icon={faThumbsUp} size="2x" color="black"/>
                                    <h4 className="welcome-icon-text">
                                        Reliable
                                    </h4>
                                </div>
                                <p className="welcome-bottom-item-txt">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </p>
                            </div>
                            <div className="welcome-bottom-item">
                                <div className="welcome-content-fontawesome-title">
                                    <FontAwesomeIcon className="welcome-icons" icon={faLock} size="2x" color="black"/>
                                    <h4 className="welcome-icon-text">
                                        Secure
                                    </h4>
                                </div>
                                <p className="welcome-bottom-item-txt">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </p>
                            </div>
                        </div>
                        <div className="welcome-content-main-bottom-right">
                            <div className="welcome-bottom-item">
                                <div className="welcome-content-fontawesome-title">
                                    <FontAwesomeIcon className="welcome-icons" icon={faTachometerAlt} size="2x" color="black"/>
                                    <h4 className="welcome-icon-text">
                                        Fast
                                    </h4>
                                </div>
                                <p className="welcome-bottom-item-txt">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </p>
                            </div>
                            <div className="welcome-bottom-item">
                                <div className="welcome-content-fontawesome-title">
                                    <FontAwesomeIcon className="welcome-icons" icon={faGlobeAfrica} size="2x" color="black"/>
                                    <h4 className="welcome-icon-text">
                                        Networked
                                    </h4>
                                </div>
                                <p className="welcome-bottom-item-txt">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
