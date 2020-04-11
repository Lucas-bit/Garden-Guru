import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header'
import About from './components/About'
import {Container, Row, Col} from './components/Grid'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <React.Fragment>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
              
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
