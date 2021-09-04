import React from 'react'
import "../Military.css"

const MilitaryContent = () => {
    return (
        <div className="military-content">
            <div className="military-content-content">
                {/* <div className="military-content-content-top">
                    <p className="military-content-content-left-p">
                        What we offer
                    </p>     
                    <h3 className="military-content-content-left-header">
                        Header Topic
                    </h3>
                </div> */}
                <div className="military-content-content-content">
                    <div className="military-content-content-left">
                        <div className="military-content-content-left-txt">
                            <p className="military-content-content-left-p">
                                What we offer
                            </p>     
                            <h3 className="military-content-content-left-header">
                                Our military-content
                            </h3>
                        </div>              
                    </div>
                    <div className="military-content-content-right">
                        <div className="military-content-right-cards">
                            <p className="military-content-right-cards-row">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, 
                            </p>
                            <p className="military-content-right-cards-row">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries,
                            </p>
                            <button className="military-content-button">
                                Request a quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MilitaryContent