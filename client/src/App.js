import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './components/Home/home';
import About from './components/About/about';
import Trucking from './components/Trucking/trucking';
import Service from './components/Services/service';
import Contact from './components/Contact/contact';
import Auth from './components/Auth/auth';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/User/Dashboard/dashboard';
import Signup from './components/User/Signup/signup';
import NotFound from './components/404/404';
import AddShipment from './components/User/addShipment/addShipment';
import Quotation from './components/User/quotation/quotation';
import Reset from './components/User/Reset/reset';
import Shipment from './components/shipment/shipment';
import Cooling from './components/Home/Products/ProductPages/Cooling/cooling';
import Medical from './components/Home/Products/ProductPages/Medicals/medical';
import Military from './components/Home/Products/ProductPages/Military/Military';
import Metals from './components/Home/Products/ProductPages/Metals/metals';
import Logistics from './components/Home/Service/ServicePages/Logistics/Logistics';
import Storage from './components/Home/Service/ServicePages/Storage/Storage';
import Tracking from './components/Home/Service/ServicePages/Tracking/Tracking';
import Ocean from './components/Home/Service/ServicePages/Ocean/Ocean';
import Brokerage from './components/Home/Service/ServicePages/Brokerage/Brokerage';
import Air from './components/Home/Service/ServicePages/Air/Air';
import Linkages from './components/Home/Service/ServicePages/Linkages/Linkages';
import Advisory from './components/Home/Service/ServicePages/Advisory/Advisory';
import Product from './components/Product/product';
import ProductQuotation from './components/Forms/ProductQuotation/ProductQuotation';
import ServiceType from './components/Forms/ServiceQuotation/ServiceType/ServiceType';
import ServiceQuotation from './components/Forms/ServiceQuotation/ServiceQuotation';
import LogisticsQuotation from './components/Forms/LogisticsQuotation/LogisticsQuotation';
import StorageForms from './components/User/UserForms/StorageForms/StorageForms';
import LogisticsForms from './components/User/UserForms/LogisticsForms/LogisticsForms';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/products" component={Product}/>
          <Route path="/services" component={Service}/>
          <Route path="/trucking" component={Trucking}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/auth" component={Auth}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/addshipment" component={AddShipment}/>
          <Route path="/shipment" component={Shipment}/>
          <Route path="/quotation" component={Quotation}/>
          <Route path="/reset" component={Reset}/> 
          <Route path="/products-cooling" component={Cooling}/>
          <Route path="/products-medicals" component={Medical}/>
          <Route path="/products-military" component={Military}/>
          <Route path="/products-metals" component={Metals}/>
          <Route path="/services-logistics" component={Logistics}/>
          <Route path="/services-storage" component={Storage}/>
          <Route path="/services-tracking" component={Tracking}/>
          <Route path="/services-brokerage" component={Brokerage}/>
          <Route path="/services-air" component={Air}/>
          <Route path="/services-linkages" component={Linkages}/>
          <Route path="/services-advisory" component={Advisory}/>
          <Route path="/service-type" component={ServiceType}/>
          <Route path="/services-ocean" component={Ocean}/>
          <Route path="/product-quotation" component={ProductQuotation}/>
          <Route path="/storage-quotation" component={ServiceQuotation}/>
          <Route path="/logistics-quotation" component={LogisticsQuotation}/>
          <Route path="/storage-form" component={StorageForms}/>
          <Route path="/logistics-form" component={LogisticsForms}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
