import React from 'react'
import "../medical.css"

const MedicalContent = () => {
    return (
        <div className="medical-content">
            <div className="medical-content-content">
                {/* <div className="medical-content-content-top">
                    <p className="medical-content-content-left-p">
                        What we offer
                    </p>     
                    <h3 className="medical-content-content-left-header">
                        Header Topic
                    </h3>
                </div> */}
                <div className="medical-content-content-content">
                    <div className="medical-content-content-left">
                        <div className="medical-content-content-left-txt">
                            <p className="medical-content-content-left-p">
                                What we offer
                            </p>     
                            <h3 className="medical-content-content-left-header">
                                Our medical-content
                            </h3>
                        </div>              
                    </div>
                    <div className="medical-content-content-right">
                        <div className="medical-content-right-cards">
                            <p className="medical-content-right-cards-row">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p className="medical-content-right-cards-row">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <button className="medical-content-button">
                                Request a quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicalContent
