import React from 'react'
import "../Tracking.css"

const TrackingContent = () => {
    return (
        <div className="tracking-content">
            <div className="tracking-content-content">
                {/* <div className="tracking-content-content-top">
                    <p className="tracking-content-content-left-p">
                        What we offer
                    </p>     
                    <h3 className="tracking-content-content-left-header">
                        Header Topic
                    </h3>
                </div> */}
                <div className="tracking-content-content-content">
                    <div className="tracking-content-content-left">
                        <div className="tracking-content-content-left-txt">
                            <p className="tracking-content-content-left-p">
                                What we offer
                            </p>     
                            <h3 className="tracking-content-content-left-header">
                                Our tracking-content
                            </h3>
                        </div>              
                    </div>
                    <div className="tracking-content-content-right">
                        <div className="tracking-content-right-cards">
                            <p className="tracking-content-right-cards-row">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p className="tracking-content-right-cards-row">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <button className="tracking-content-button">
                                Request a quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackingContent
