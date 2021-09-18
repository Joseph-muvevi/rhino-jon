import React from 'react'
import "../../shipment.css"

const StorageTableContent = ({content}) => {
    let info = content
    console.log(info)


    return (
        <div className="storage-content-table">
            <div className="storage-content-table-content">
                <div className="storage-content-table-content-topic">
                    <p  className="storage-content-table-content-topic-p-number">
                        #
                    </p>
                    <p  className="storage-content-table-content-topic-p-description">
                        Description: 
                    </p>
                    <p className="storage-content-table-content-topic-p">
                        Quality
                    </p>
                    <p className="storage-content-table-content-topic-p-unit">
                        Pieces
                    </p>
                    <p className="storage-content-table-content-topic-p-packaging">
                        Packaging
                    </p>
                    <p className="storage-content-table-content-topic-p-weight">
                        Weight
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
                        <p className="storage-content-table-content-topic-p-number">
                            1
                        </p>
                        <p className="storage-content-table-content-topic-p-description">
                            {info ? info.notes : null}
                        </p>
                        <p className="storage-content-table-content-topic-p">
                            {info ? info.quality : null}
                        </p>
                        <p className="storage-content-table-content-topic-p-unit">
                            {info ? info.pieces : null}
                        </p>
                        <p className="storage-content-table-content-topic-p-packaging">
                            {info ? info.packaging : null}
                        </p>
                        <p className="storage-content-table-content-topic-p-weight">
                            {info ? info.weight : null} {info ? info.weightunit : null} 
                        </p>
                        <p className="storage-content-table-content-topic-p">
                            {info ? info.storagecity : null}
                        </p>
                        <p className="storage-content-table-content-topic-p">
                            status
                        </p>
                    </div>
                    <div className="storage-content-table-content-topic-lower">
                    <div className="storage-content-table-content-topic-lower-observation">
                        <p style={{marginLeft: "12px"}} className="storage-content-table-content-topic-p">
                            Observations
                        </p>
                    </div>
                    </div>
                        <p style={{marginLeft: "12px"}} className="storage-content-table-content-topic-observation">
                            {info ? info.observation : null}
                        </p>
                </div>

            </div>
        </div>
    )
}

export default StorageTableContent
