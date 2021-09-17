import React from 'react'

const AdminLogisticsTableContent = ({content}) => {
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
                        Tracking No. 
                    </p>
                    <p  className="storage-content-table-content-topic-p-description">
                        Client
                    </p>
                    <p className="storage-content-table-content-topic-p">
                        
                    </p>
                    <p className="storage-content-table-content-topic-p-unit">
                        Unit
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
              
               {[1,2,3,4].map(() =>  (
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
                                {info ? info.unit : null}
                            </p>
                            <p className="storage-content-table-content-topic-p-packaging">
                                {info ? info.notes : null}
                            </p>
                            <p className="storage-content-table-content-topic-p-weight">
                                {info ? info.weight : null}
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
                   )
               )}

            </div>
        </div>
    )
}

export default AdminLogisticsTableContent
