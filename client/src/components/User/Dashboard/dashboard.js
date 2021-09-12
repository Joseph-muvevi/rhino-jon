import React from 'react'
import "./dashboard.css"
import Analitics from './analitics/analitics'
import LogisticsForms from "../../User/UserForms/LogisticsForms/LogisticsForms"
import StorageForms from "../../User/UserForms/StorageForms/StorageForms"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import DashNav from './DashNav/DashNav'
import DashboardHome from './DashBoardHome/DashboardHome'
import DashTable from './Tables/table'
import DashForms from "./DashForms/DashForms"


const Dashboard = () => {
    return (
        <Router className="dashboard">
            <div className="dashboard-nav">
                <DashNav/>
            </div>
            <Switch className="dashboard-main">
                <Route path="/dashboard/home" component={DashboardHome}/>
                <Route path="/dashboard/analitics" component={Analitics}/>
                <Route path="/dashboard/tables" component={DashTable}/>
                <Route path="/dashboard/forms" component={DashForms}/>
                <Route path="/dashboard/logistics-form" component={LogisticsForms}/>
                <Route path="/dashboard/storage-form" component={StorageForms}/>
                {/* <Analitics/>
                <DashTable/>
                <LogisticsTable/>
                <StorageTable/> */}
            </Switch>
        </Router>
    )
}

export default Dashboard
