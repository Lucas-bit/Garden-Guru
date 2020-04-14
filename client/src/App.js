import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home'
import Register from './components/Register';

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
