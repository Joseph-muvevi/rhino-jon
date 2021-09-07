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
                    <p className="welcome-content-top-p">
                        About us
                    </p>
                </div>
                <div className="welcome-content-main">
                    <div className="welcome-content-main-bottom">
                        <div className="about-welcome-content-top">
                            <p className="welcome-content-top-text">
                                Rhinojohn Prime Metal International Limited is a global company that has grown to become 
                                one of the leading players in the precious metals and stones value chain. We focus on trading, 
                                safekeeping, logistics and delivery of these valuable products.
                            </p>
                            <p className="welcome-content-top-text">
                                Our team of globally exposed experts have a combined experience of more than 20 years in this trade 
                                and guarantee continous transactions. They will link you to the right actors and dealers in the trade; 
                                from Miners (Artisanal and Industrial), Buyers, Sellers, Intermediaries, Refiners and Gemologist.
                            </p>
                            <p className="welcome-content-top-text">
                                We source our precious metals and gemstones from countries rich in mineral
                                resources around the world especially in Africa and Asia. We work with artisanal miners and registered 
                                small mining companies from Kenya, Tanzania, the Democratic Republic of Congo, Ghana, Liberia, Sierra Leone, Bukinafaso, 
                                Botswana, Angola, Zimbabwe, South Sudan, Central African Republic, Namibia and Papua New Guinea.
                            </p>
                            <p className="welcome-content-top-text">
                                Our trading policy comply with international standards with regard to tracability and accountability.
                            </p>
                        </div>
                    </div>
                        <Link to="/quotation">
                            <button className="welcome-button">
                                View More
                            </button>
                        </Link>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default Welcome
