import React, { Component } from 'react';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Class from './Components/Class';
import ClassStudent from './Components/StudentClass';
import TeacherClassList from './Components/TeacherClassList';
import StudentClassList from './Components/StudentClassList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/sign-up" component={SignUp} />
             <Route exact={true} path="/Teacher/Post/:Class" component={Class} />
             <Route exact={true} path="/Student/Post/:Class" component={ClassStudent} />
           <Route exact={true} path="/Teacher/class-list" component={TeacherClassList} />
           <Route exact={true} path="/Student/class-list" component={StudentClassList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;