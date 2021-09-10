import React from 'react'
// import LogisticsTable from '../Tables/LogisticsTable/LogisticsTable'
import DashboardBanner from './dashboardBanner'
import DashboardCards from './dashboardCards'
import DashboardHomeTable from './DashboardHomeTable/dashboardhometable'

const DashboardHome = () => {
    return (
        <div className="dashboard-home">
            <DashboardBanner/>
            <DashboardCards/>
            <DashboardHomeTable/>
        </div>
    )
}

export default DashboardHome
