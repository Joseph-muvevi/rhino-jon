import React from 'react'
import "../../shipment.css"

const StorageTableContent = ({content}) => {
    let info = content
    console.log(info)
    return (
        <div className="storage-content-table">
            <div className="storage-content-table-content">
                <div className="storage-content-table-content-topic">
                    <p className="storage-content-table-content-topic-p">
                        Description: 
                    </p>
                    <p className="storage-content-table-content-topic-p">
                        Quality
                    </p>
                    <p className="storage-content-table-content-topic-p">
                        Unit
                    </p>
                    <p className="storage-content-table-content-topic-p">
                        Packaging
                    </p>
                    <p className="storage-content-table-content-topic-p">
                        Weight
                    </p>
                    <p className="storage-content-table-content-topic-p">
                        Piece
                    </p>
                    <p className="storage-content-table-content-topic-p">
                        Location
                    </p>
                    <p className="storage-content-table-content-topic-p">
                        Status
                    </p>
                </div>
              
                <div className="storage-content-table-content-info">
                    <div className="storage-content-table-content-topic-upper">
                        <p className="storage-content-table-content-topic-p">
                            {info ? info.notes : null}
                        </p>
                        <p className="storage-content-table-content-topic-p">
                            {info ? info.quality : null}
                        </p>
                        <p className="storage-content-table-content-topic-p">
                            {info ? info.unit : null}
                        </p>
                        <p className="storage-content-table-content-topic-p">
                            {/* {info ? info.notes : null} */}
                        </p>
                        <p className="storage-content-table-content-topic-p">
                            {info ? info.weight : null}
                        </p>
                        <p className="storage-content-table-content-topic-p">
                            {info ? info.pieces : null}
                        </p>
                        <p className="storage-content-table-content-topic-p">
                            {info ? info.city : null}
                        </p>
                        <p className="storage-content-table-content-topic-p">
                            status
                        </p>
                    </div>
                    <div className="storage-content-table-content-topic-lower">
                    <div className="storage-content-table-content-topic-lower-observation">
                        <p className="storage-content-table-content-topic-p">
                            Observations
                        </p>
                    </div>
                    </div>
                        <p className="storage-content-table-content-topic-observation">
                            {info ? info.observation : null}
                        </p>
                </div>

            </div>
        </div>
    )
}

export default StorageTableContent
