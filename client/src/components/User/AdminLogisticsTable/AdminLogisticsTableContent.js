import React from 'react'
import "./adminlogisticstable.css"

const AdminLogisticsTableContent = ({data}) => {
    let info = data
    console.log(info)


    return (
        <div className="logistics-content-table">
            <div className="logistics-content-table-content">
                   
                    <div className="logistics-content-table-content-info">
                        <div className="logistics-content-table-content-topic-upper">
                            <p className="logistics-content-table-content-topic-p-number">
                                1
                            </p>
                            <p className="logistics-content-table-content-topic-p-description">
                                {info ? info.trackno : null}
                            </p>
                            <p className="logistics-content-table-content-topic-p">
                                {info ? info.fullnames : null}    
                            </p>
                            <p className="logistics-content-table-content-topic-p-unit">
                                {info ? info.product : null}
                            </p>
                            <p className="logistics-content-table-content-topic-p-packaging">
                                {info ? info.address : null}
                            </p>
                            <p className="logistics-content-table-content-topic-p-weight">
                                {info ? info.weight : null} {info ? info.weightunit : null}
                            </p>
                            <p className="logistics-content-table-content-topic-p">
                                 {info ? info.departurecity : null}
                            </p>
                            <p className="logistics-content-table-content-topic-p">
                                {info ? info.departurecountry : null}
                            </p>
                            <p className="logistics-content-table-content-topic-p-weight">
                                {info ? info.arrivalcountry : null}
                            </p>
                            <p className="logistics-content-table-content-topic-p">
                                {info ? info.arrivalcity : null}
                            </p>
                            <p className="logistics-content-table-content-topic-p">
                                {info ? info.status : null}
                            </p>
                        </div>
                        <div className="logistics-content-table-content-topic-lower">
                            <div className="logistics-content-table-content-topic-lower-observation">
                                <p style={{marginLeft: "12px"}} className="logistics-content-table-content-topic-p">
                                    Observations : {info ? info.notes : null}
                                </p>
                            </div>
                        </div>
                            {/* <p style={{marginLeft: "12px"}} className="logistics-content-table-content-topic-observation">
                            </p> */}
                    </div>
            </div>
        </div>
    )
}

export default AdminLogisticsTableContent
