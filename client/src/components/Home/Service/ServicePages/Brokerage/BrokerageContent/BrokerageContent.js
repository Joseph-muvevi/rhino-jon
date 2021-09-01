import React from 'react'
import "../Brokerage.css"

const BrokerageContent = () => {
    return (
        <div className="brokerage-content">
            <div className="brokerage-content-content">
                {/* <div className="brokerage-content-content-top">
                    <p className="brokerage-content-content-left-p">
                        What we offer
                    </p>     
                    <h3 className="brokerage-content-content-left-header">
                        Header Topic
                    </h3>
                </div> */}
                <div className="brokerage-content-content-content">
                    <div className="brokerage-content-content-left">
                        <div className="brokerage-content-content-left-txt">
                            <p className="brokerage-content-content-left-p">
                                What we offer
                            </p>     
                            <h3 className="brokerage-content-content-left-header">
                                Our brokerage-content
                            </h3>
                        </div>              
                    </div>
                    <div className="brokerage-content-content-right">
                        <div className="brokerage-content-right-cards">
                            <p className="brokerage-content-right-cards-row">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p className="brokerage-content-right-cards-row">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <button className="brokerage-content-button">
                                Request a quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrokerageContent
