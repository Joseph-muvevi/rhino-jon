import React from 'react'
import "./dashboard.css"
import Analitics from './analitics/analitics'
import LogisticsTable from './Tables/LogisticsTable/LogisticsTable'
import { StorageTable } from './Tables/StorageTable/StorageTable'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import DashNav from './DashNav/DashNav'
import DashboardHome from './DashBoardHome/DashboardHome'


const Dashboard = () => {
    return (
        <Router className="dashboard">
            <div className="dashboard-nav">
                <DashNav/>
            </div>
            <Switch className="dashboard-main">
                <Route path="/dashboard/home" component={DashboardHome}/>
                <Route path="/dashboard/analitics" component={Analitics}/>
                {/* <Analitics/>
                <DashTable/>
                <LogisticsTable/>
                <StorageTable/> */}
            </Switch>
        </Router>
    )
}

export default Dashboard
