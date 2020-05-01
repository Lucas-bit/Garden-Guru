import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './lib/PrivateRoute'
import Login from './components/Login';
import {Container, Row, Col} from './components/Grid';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Register from './pages/SignUp/signUp';
import Invalid from './pages/Invalid/invalid'
import MyGarden from './pages/MyGarden/myGarden';
import failedSearch from './pages/FailedSearch/FailedSearch'
import Logout from './components/Logout/index';
import Maintenance from './pages/Maintenance/maintenance';


function App() {
  return (
      <React.Fragment>
        <Router>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/invalid" component={Invalid}/>  

          <PrivateRoute path="/search" component={Search} />    
          <PrivateRoute path="/mygarden" component={MyGarden}/>
          <PrivateRoute path="/logout" component={Logout}/>
          <PrivateRoute path="/maintenance" component={Maintenance}/>
          <Route path="/*" component={failedSearch}/>
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
