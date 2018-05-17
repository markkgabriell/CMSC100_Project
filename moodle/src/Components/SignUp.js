import React, { Component} from 'react';
import {Row, Input, Button, Navbar} from 'react-materialize';
import './css/SignUp.css';
class SignUp extends Component {
  render() {
    return (
      <div>
      	<h4 id="sign-header">SIGN UP</h4>
      	<div className="sign-fields">
          <Input type="text" label="First Name" />
          <Input type="text" label="Last Name" />
      		<Input type="password" label="Password" />
          <Input type="password" label="Repeat Password" />
      		<Input type="email" label="Email" />
          <Button waves="light" node='a' href='/'>
			      SIGNUP
			    </Button>
      	</div>
      </div>
      )
  }
}

export default SignUp;