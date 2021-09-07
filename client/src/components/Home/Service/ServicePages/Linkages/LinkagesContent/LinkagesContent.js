import React from 'react'
import { Link } from 'react-router-dom'
import "../Linkages.css"

const LinkagesContent = () => {
    return (
        <div className="linkages-content">
            <div className="linkages-content-content">
                {/* <div className="linkages-content-content-top">
                    <p className="linkages-content-content-left-p">
                        What we offer
                    </p>     
                    <h3 className="linkages-content-content-left-header">
                        Header Topic
                    </h3>
                </div> */}
                <div className="linkages-content-content-content">
                    <div className="linkages-content-content-left">
                        <div className="linkages-content-content-left-txt">
                        </div>              
                    </div>
                    <div className="linkages-content-content-right">
                        <div className="linkages-content-right-cards">
                            <p className="linkages-content-right-cards-row">
                                We have teams of freight forwarders and road 
                                transport service providers experienced with good knowledge and experience.
                            </p>
                            <p className="linkages-content-right-cards-row">
                                Through our strong partnership network in Africa, we provide sustainable road and rail transport solutions 
                                for mining  products from their places of extraction and production to places of transit 
                                and their final destinations.
                                Our coverage extend from West Africa to South Africa through East and Central Africa.
                            </p>
                        
                            <div className="lower-button-group">
                                <Link to="/service-type">
                                    <button className="storage-content-button">
                                        Request a quote
                                    </button>
                                </Link>
                                <Link to="/quotation">
                                    <button className="storage-content-button">
                                        Make enquiry
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinkagesContent
