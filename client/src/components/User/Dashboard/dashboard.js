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
import LogisticsEditForms from '../UserForms/LogisticsEditForm/LogisticsEditForms'
import StorageEditForms from '../UserForms/StorageEditForms/StorageEditForms'
import axios from "axios"
import DashGeneralEnquiries from './DashBoardHome/DashboardHomePages/DashGeneralEnquiries/DashGeneralEnquiries'
import DashProductQuotation from './DashBoardHome/DashboardHomePages/DashProductQuotation/DashProductQuotation'
import DashProductShipment from './DashBoardHome/DashboardHomePages/DashProductShipped/DashProductShipped'
import DashShipmentQuotation from './DashBoardHome/DashboardHomePages/DashShipmentQuotation/DashShipmentQuotation'
import DashShipmentTableAdmin from './DashBoardHome/DashboardHomePages/DashShipmentTableAdmin/DashShipmentTableAdmin'
import DashStorageQuotation from './DashBoardHome/DashboardHomePages/DashStorageQuotation/DashStorageQuotation'
import DashStorageTableAdmin from './DashBoardHome/DashboardHomePages/DashStorageTableAdmin/DashStorageTableAdmin'
import DashProductStored from './DashBoardHome/DashboardHomePages/DashProductStored/DashProductStored'

const Dashboard = () => {
    // const tkt = localStorage.getItem("token")
    // console.log("my tkt of the dashboard is", tkt)

    // if (!tkt) {
    //     return <Redirect to="/auth"/>
    // }

    const [logdata, setLogData] = useState([])
    const [storageData, setStorageData] = useState([])
    const [logquotation, setLogQuotation] = useState([])
    const [storageQuotation, setStorageQuotation] = useState([])
    const [productQuotation, setProductQuotation] = useState([])
    // const [logdataErrors, setLogDataErrors] = useState([])
    // const [dates, setDates] = useState([])

    const getLogData = () => {
        axios.get("http://localhost:8080/api/logisticsrecords")
        .then(res => {
            setLogData(res.data)
            console.log(res)
        })
        .catch(err => console.log(err))
    }
    
    const getStorageData = () => {
        axios.get("http://localhost:8080/api/storageshipment")
        .then(res =>{
            setStorageData(res.data)
        })
        .catch(err => console.log(err))
    }
    
    const getLogisticsQuotation = () => {
        axios.get("http://localhost:8080/api/logisticsquotation")
        .then(res =>{
            setLogQuotation(res.data)
        })
        .catch(err => console.log(err))
    }
    
    const getStorageQuotation = () => {
        axios.get("http://localhost:8080/api/storagequotation")
        .then(res =>{
            setStorageQuotation(res.data)
        })
        .catch(err => console.log(err))
    }
    
    const getProductQuotation = () => {
        axios.get("http://localhost:8080/api/productquotation")
        .then(res =>{
            setProductQuotation(res.data)
        })
        .catch(err => console.log(err))
    }


    useEffect(() => {
        getLogData()
        getStorageData()
        getLogisticsQuotation()
        getProductQuotation()
        getStorageQuotation()
    }, [])

    console.log("dashboard data",logdata, storageData, storageQuotation, logquotation)
    
    return (
        <Router  className="dashboard">
            <div className="dashboard-nav">
                <DashNav/>
            </div>
            <div className="dont-display">
                <DashboardHome 
                    storage={storageData} 
                    logistics = {logdata}
                    storeQuotation = {storageQuotation}
                    prodQuotation = {productQuotation}
                    logisticsQuotation = {logquotation}
                    />
            </div>
            <Switch className="dashboard-main">
                <Route path="/" exact component={Home}/>
                <Route path="/dashboard/home" component={DashboardHome}/>
                <Route path="/dashboard/analitics" component={Analitics}/>
                <Route path="/dashboard/tables" component={DashTable}/>
                <Route path="/dashboard/forms" component={DashForms}/>
                <Route path="/dashboard/logistics-form" component={LogisticsForms}/>
                <Route path="/dashboard/logistics/edit/logisticsform" component={LogisticsEditForms}/>
                <Route path="/dashboard/storage-form" component={StorageForms}/>
                <Route path="/dashboard/storage/edit/storageform" component={StorageEditForms}/>
                <Route path="/dashboard/admin/logistics-records" component={AdminLogisticsTable}/>
                <Route path="/dashboard/admin/storage-records" component={AdminStorageTable}/>
                <Route path="/dashboard/generalenquiries" component={DashGeneralEnquiries}/>
                <Route path="/dashboard/productquotation" component={DashProductQuotation}/>
                <Route path="/dashboard/productshipped" component={DashProductShipment}/>
                <Route path="/dashboard/shipmentquotation" component={DashShipmentQuotation}/>
                <Route path="/dashboard/shipmenttable" component={DashShipmentTableAdmin}/>
                <Route path="/dashboard/storagequotation" component={DashStorageQuotation}/>
                <Route path="/dashboard/storagetable" component={DashStorageTableAdmin}/>
                <Route path="/dashboard/productstored" component={DashProductStored}/>
            </Switch>
        </Router>
    )
}

export default Dashboard
