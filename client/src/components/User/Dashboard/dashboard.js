import React from 'react'
import DashboardBanner from './DashboardBanner/dashboardBanner'
import "./dashboard.css"
import DashboardCards from './dashboardCards/dashboardCards'
import Analitics from './analitics/analitics'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DashboardBanner/>
            <DashboardCards/>
            <Analitics/>
        </div>
    )
}

export default Dashboard
