import React from 'react'
import "../Storage.css"

const StorageContent = () => {
    return (
        <div className="storage-content">
            <div className="storage-content-content">
                {/* <div className="storage-content-content-top">
                    <p className="storage-content-content-left-p">
                        What we offer
                    </p>     
                    <h3 className="storage-content-content-left-header">
                        Header Topic
                    </h3>
                </div> */}
                <div className="storage-content-content-content">
                    <div className="storage-content-content-left">
                        <div className="storage-content-content-left-txt">
                            <p className="storage-content-content-left-p">
                                What we offer
                            </p>     
                            <h3 className="storage-content-content-left-header">
                                Our storage-content
                            </h3>
                        </div>              
                    </div>
                    <div className="storage-content-content-right">
                        <div className="storage-content-right-cards">
                            <p className="storage-content-right-cards-row">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p className="storage-content-right-cards-row">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <button className="storage-content-button">
                                Request a quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StorageContent
