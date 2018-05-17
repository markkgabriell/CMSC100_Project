import React, { Component} from 'react';
import {Row, Input, Button, Navbar} from 'react-materialize';
import './css/Login.css';
class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:"",
      username: "",
      password:"",
      checkIfOut: true
    }
  }

  render() {
    return (
      <div>
      	<h4 id="log-header">SIGN IN</h4>
      	<div className="log-fields">
      		<Input type="email" label="Email"/>
      		<Input type="password" label="Password"/>
      		<Button waves="light" node='a' href='/class-list'>
			LOGIN
			</Button>
			<p>Don't have an account? <span><a href='/sign-up'>Sign Up</a></span></p>
      	</div>
      </div>
      )
  }
}

export default Login;