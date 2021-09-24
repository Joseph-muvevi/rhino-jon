import React from 'react'
import DashboardBanner from './dashboardBanner'
import DashboardCards from './dashboardCards'
// import DashboardHomeTable from './DashboardHomeTable/dashboardhometable'


const DashboardHome = () => {

    return (
        <div className="dashboard-home">
            <DashboardBanner />
            <DashboardCards  />
            {/* <DashboardHomeTable/> */}
        </div>
    )
}

export default DashboardHome
