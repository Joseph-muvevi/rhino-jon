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
import axios from "axios"
import Home from '../../Home/home'


const Dashboard = () => {

    const [shipment, setShipment] = useState([])
    const [productEnquiries, setProductEnquiries] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/api/storageshipment")
            .then((res) => setShipment(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Router  className="dashboard">
            <div className="dashboard-nav">
                <DashNav/>
            </div>
            <div className="dont-display">
                <DashboardHome shipment={shipment}/>
            </div>
            {
                console.log(shipment)
            }
            <Switch className="dashboard-main">
                <Route path="/" exact component={Home}/>
                <Route path="/dashboard/home" component={DashboardHome}/>
                <Route path="/dashboard/analitics" component={Analitics}/>
                <Route path="/dashboard/tables" component={DashTable}/>
                <Route path="/dashboard/forms" component={DashForms}/>
                <Route path="/dashboard/logistics-form" component={LogisticsForms}/>
                <Route path="/dashboard/storage-form" component={StorageForms}/>
            </Switch>
        </Router>
    )
}

export default Dashboard
