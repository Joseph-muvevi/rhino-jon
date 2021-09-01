import React from 'react'
import "../Advisory.css"

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
                            <p className="advisory-content-content-left-p">
                                What we offer
                            </p>     
                            <h3 className="advisory-content-content-left-header">
                                Our advisory-content
                            </h3>
                        </div>              
                    </div>
                    <div className="advisory-content-content-right">
                        <div className="advisory-content-right-cards">
                            <p className="advisory-content-right-cards-row">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p className="advisory-content-right-cards-row">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <button className="advisory-content-button">
                                Request a quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvisoryContent