import React from 'react'
// import LogisticsTable from '../Tables/LogisticsTable/LogisticsTable'
import DashboardBanner from './dashboardBanner'
import DashboardCards from './dashboardCards'
import DashboardHomeTable from './DashboardHomeTable/dashboardhometable'

const DashboardHome = ({shipment}) => {
    return (
        <div className="dashboard-home">
            <DashboardBanner />
            <DashboardCards shipment={shipment}/>
            <DashboardHomeTable/>
        </div>
    )
}

export default DashboardHome
