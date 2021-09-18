import React, {useState, useEffect} from 'react'
import "./dashboard.css"
import Analitics from './analitics/analitics'
import LogisticsForms from "../../User/UserForms/LogisticsForms/LogisticsForms"
import StorageForms from "../../User/UserForms/StorageForms/StorageForms"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import DashNav from './DashNav/DashNav'
import DashboardHome from './DashBoardHome/DashboardHome'
import DashTable from './Tables/table'
import DashForms from "./DashForms/DashForms"
import Home from '../../Home/home'
import { Redirect } from 'react-router'
import AdminLogisticsTable from '../AdminLogisticsTable/AdminLogisticsTable'
import AdminStorageTable from '../AdminStorageTable/AdminStorageTable'

const Dashboard = () => {


        const tkt = localStorage.getItem("token")
        console.log("my tkt of the dashboard is", tkt)

        // if (!tkt) {
        //     return <Redirect to="/auth"/>
        // }

        return (
        <Router  className="dashboard">
            <div className="dashboard-nav">
                <DashNav/>
            </div>
            <div className="dont-display">
                <DashboardHome />
            </div>
            <Switch className="dashboard-main">
                <Route path="/" exact component={Home}/>
                <Route path="/dashboard/home" component={DashboardHome}/>
                <Route path="/dashboard/analitics" component={Analitics}/>
                <Route path="/dashboard/tables" component={DashTable}/>
                <Route path="/dashboard/forms" component={DashForms}/>
                <Route path="/dashboard/logistics-form" component={LogisticsForms}/>
                <Route path="/dashboard/storage-form" component={StorageForms}/>
                <Route path="/dashboard/admin/logistics-records" component={AdminLogisticsTable}/>
                <Route path="/dashboard/admin/storage-records" component={AdminStorageTable}/>
            </Switch>
        </Router>
    )
}

export default Dashboard
