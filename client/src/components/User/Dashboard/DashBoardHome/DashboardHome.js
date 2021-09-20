import React, {useState, useEffect} from 'react'
// import LogisticsTable from '../Tables/LogisticsTable/LogisticsTable'
import DashboardBanner from './dashboardBanner'
import DashboardCards from './dashboardCards'
import DashboardHomeTable from './DashboardHomeTable/dashboardhometable'


const DashboardHome = ({  storage,  logistics,  storeQuotation, prodQuotation, logisticsQuotation }) => {


    console.log("The dashboard logistics/storage",storage, logistics)
    console.log("the dashboard [quotation] data", storeQuotation, prodQuotation, logisticsQuotation)

    console.log(storage, "storage data")

    // useEffect(() => {
    //     if (storage) {
    //         console.log(storage.length, "some datan")
    //         setStoreLength(storage.length)
    //     }
        
    // }, [])

    console.log("variable length is", storage)

    return (
        <div className="dashboard-home">
            <DashboardBanner />
            <DashboardCards 
                stoQuotation= {storeQuotation}
                prodQuotation = {prodQuotation}
                logQuotation = {logisticsQuotation}
            />
            <DashboardHomeTable/>
        </div>
    )
}

export default DashboardHome
