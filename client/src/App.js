import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import SucculentPhoto from './components/SucculentPhoto/index'
import {Container, Row, Col} from './components/Grid';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

function App() {
  return (
    <div>
      <React.Fragment>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/register" component={Register}/>
          <Route path="/search" component={Search} />    

              
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
