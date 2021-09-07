import React from 'react'
import "../Advisory.css"
import {Link} from "react-router-dom"

const AdvisoryContent = () => {
    return (
        <div className="advisory-content">
            <div className="advisory-content-content">
                {/* <div className="advisory-content-content-top">
                    <p className="advisory-content-content-left-p">
                        What we offer
                    </p>     
                    <h3 className="advisory-content-content-left-header">
                        Header Topic
                    </h3>
                </div> */}
                <div className="advisory-content-content-content">
                    <div className="advisory-content-content-left">
                        <div className="advisory-content-content-left-txt">
                            {/* <p className="advisory-content-content-left-p">
                                What we offer
                            </p>      */}
                           
                        </div>              
                    </div>
                    <div className="advisory-content-content-right">
                        <div className="advisory-content-right-cards">
                            <p className="advisory-content-right-cards-row">
                                We have succeeded in establishing, over the years, a system of partnership with 
                                the various actors and stakeholders in the mining sector in Africa, mainly those
                                 operating in countries with significant mining reserves and operating mines. 
                                 Among these actors, we find artisanal miners, small and medium scale production 
                                 mines and mining cooperatives. The other players are traders and commission agents.

                            </p>
                            <p className="advisory-content-right-cards-row">
                                We organized ourselves and gained notoriety as an agency for facilitating 
                                commercial contracts between sellers and buyers of mining products.
                            </p>
                            <p className="advisory-content-right-cards-row">
                                At a reasonable pre-negotiated fee we source, inspect, transport and
                                refine precious stones on behalf of private investors.
                            </p>
                            <Link to="/product-quotation-form">
                                <button className="advisory-content-button">
                                    Request a quote
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvisoryContent