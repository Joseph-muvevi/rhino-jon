import React from 'react'
import "./adminlogisticstable.css"

const AdminLogisticsTableContent = ({data, length}) => {
    let info = data
    console.log(info)

    // console.log("the length of is", length)


    return (
        <div className="logistics-content-table">
            <div className="logistics-content-table-content">
                   
                    <div className="logistics-content-table-content-info">
                        <div className="logistics-content-table-content-topic-upper">
                            <p className="logistics-content-table-content-topic-p-number">
                                { length + 1 }
                            </p>
                            <p className="logistics-content-table-content-topic-p-track">
                                {info ? info.trackno : null}
                            </p>
                            <p className="logistics-content-table-content-topic-p-fullnames">
                                {info ? info.fullnames : null}    
                            </p>
                            <p className="logistics-content-table-content-topic-p-product">
                                {info ? info.product : null}
                            </p>
                            <p className="logistics-content-table-content-topic-p-address">
                                {info ? info.address : null}
                            </p>
                            <p className="logistics-content-table-content-topic-p-weight">
                                {info ? info.weight : null} {info ? info.weightunit : null}
                            </p>
                            <p className="logistics-content-table-content-topic-departure-city">
                                 {info ? info.departurecity : null}
                            </p>
                            <p className="logistics-content-table-content-topic-departure-country">
                                {info ? info.departurecountry : null}
                            </p>
                            <p className="logistics-content-table-content-topic-arrival-city">
                                {info ? info.arrivalcity : null}
                            </p>
                            <p className="logistics-content-table-content-topic-arrival-country">
                                {info ? info.arrivalcountry : null}
                            </p>
                            <p className="logistics-content-table-content-topic-status">
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
