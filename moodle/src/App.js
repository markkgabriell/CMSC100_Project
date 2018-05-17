import React, { Component } from 'react';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Class from './Components/Class';
import ClassList from './Components/ClassList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/sign-up" component={SignUp} />
            <Route exact={true} path="/class" component={Class} />
           <Route exact={true} path="/Teacher/class-list" component={ClassList} />
           <Route exact={true} path="/Student/class-list" component={ClassList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;