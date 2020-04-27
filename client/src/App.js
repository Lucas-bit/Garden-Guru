import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './components/Login';
import {Container, Row, Col} from './components/Grid';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Register from './pages/SignUp/signUp';
import Invalid from './pages/Invalid/invalid'
// import Home from './pages/Home/Home'
// import SignUp from './pages/SignUp/signUp';
import MyGarden from './pages/MyGarden/myGarden';
import failedSearch from './pages/FailedSearch/FailedSearch'


function App() {
  return (
      <React.Fragment>
        <Router>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register}/>
          <Route path="/search" component={Search} />    
          <Route path="/mygarden" component={MyGarden}/>
          <Route path="/invalid" component={Invalid}/>  
          <Route path="/*" component={failedSearch}/>
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
