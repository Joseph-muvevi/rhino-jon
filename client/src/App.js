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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Service}/>
          <Route path="/trucking" component={Trucking}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/auth" component={Auth}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/addshipment" component={AddShipment}/>
          {/* <Route path="/me/reset" component={Reset}/>  */}
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
