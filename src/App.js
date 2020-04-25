import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import {Container, Row, Col} from './components/Grid';
import PrivateRoute from './lib/PrivateRoute'

import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Register from './pages/SignUp/signUp';
import MyGarden from './pages/MyGarden/myGarden';
import Logout from './components/Logout/index';


function App() {
  return (
    <div>
      <React.Fragment>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register}/>
          <PrivateRoute path="/search" component={Search} />    
          <PrivateRoute path="/mygarden" component={MyGarden}/>
          <PrivateRoute path="/logout" component={Logout}/>
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
