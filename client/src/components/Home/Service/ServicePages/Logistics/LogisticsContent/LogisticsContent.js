import React from 'react'
import "../Logistics.css"

const LogisticsContent = () => {
    return (
        <div className="logistics-content">
            <div className="logistics-content-content">
                {/* <div className="logistics-content-content-top">
                    <p className="logistics-content-content-left-p">
                        What we offer
                    </p>     
                    <h3 className="logistics-content-content-left-header">
                        Header Topic
                    </h3>
                </div> */}
                <div className="logistics-content-content-content">
                    <div className="logistics-content-content-left">
                        <div className="logistics-content-content-left-txt">
                            <p className="logistics-content-content-left-p">
                                What we offer
                            </p>     
                            <h3 className="logistics-content-content-left-header">
                                Our logistics-content
                            </h3>
                        </div>              
                    </div>
                    <div className="logistics-content-content-right">
                        <div className="logistics-content-right-cards">
                            <p className="logistics-content-right-cards-row">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p className="logistics-content-right-cards-row">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <button className="logistics-content-button">
                                Request a quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogisticsContent
