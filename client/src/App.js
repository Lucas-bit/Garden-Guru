import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp/signUp';
import MyGarden from './pages/MyGarden/myGarden';


function App() {
  return (
    <div>
      <React.Fragment>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/register" component={SignUp}/>
          <Route path="/mygarden" component={MyGarden}/>
              
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
