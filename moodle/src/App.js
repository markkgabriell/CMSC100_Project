import React, { Component } from 'react';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Class from './Components/Class';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact={true} path="/" component={Login} />
            <Route exact={true} path="/sign-up" component={SignUp} />
            <Route exact={true} path="/class" component={Class} />
           
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
