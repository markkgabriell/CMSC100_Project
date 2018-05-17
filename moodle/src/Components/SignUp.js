import React, { Component} from 'react';
import {Row, Input, Button, Navbar, Dropdown, NavItem} from 'react-materialize';
import './css/SignUp.css';
const request = require('request')
class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      passwordRepeat: '',
      usertype: ''
    };
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordRepeat = this.handleChangePasswordRepeat.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeUserType = this.handleChangeUserType.bind(this);
    // this.validation = this.validation.bind(this);
    this.signup = this.signup.bind(this);
  }
  handleChangeFirstName(e){
      this.setState({firstname: e.target.value});
  }
  handleChangeLastName(e){
      this.setState({lastname: e.target.value});
  }
  handleChangePassword(e){
      this.setState({password: e.target.value});
  }
  handleChangePasswordRepeat(e){
      this.setState({passwordRepeat: e.target.value});
  }
  handleChangeEmail(e){
      this.setState({email: e.target.value});
  }
  handleChangeUserType(e){
      this.setState({usertype: e.target.value});
  }
  handleChangeUsername(e){
      this.setState({username: e.target.value});
  }
  signup(e){
    return request.post('http://localhost:3001/User/signup', {
      form : {
        email : this.state.email,
        name : this.state.firstname + " " + this.state.lastname,
        username : this.state.username,
        password : this.state.password,
        usertype : this.state.usertype
      }
    }, (error, response, body) => {
      if(response == {}){
        alert("Error Signing up");        
      }else{
        alert("Welcome!!!");
        console.log(body);
        if(this.state.usertype == "Teacher"){
          this.props.history.push('/Teacher/class-list', {username: this.state.username});
        }else{
          this.props.history.push('/Student/class-list');
        }
      }
    })
  }

  render() {
    return (
      <div>
      	<h4 id="sign-header">SIGN UP</h4>
      	<div className="sign-fields">
          <Input type="text" label="First Name" onChange={this.handleChangeFirstName}/>
          <Input type="text" label="Last Name" onChange={this.handleChangeLastName}/>
          <Input type="text" label="Username" onChange={this.handleChangeUsername}/>
      		<Input type="password" label="Password" onChange={this.handleChangePassword} />
          <Input type="password" label="Repeat Password" onChange={this.handleChangePasswordRepeat} />
      		<Input type="email" label="Email" onChange={this.handleChangeEmail}/>
          <Input type="select" label="Type" onChange={this.handleChangeUserType}>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
          </Input>
          <br/><br/>
          <Button waves="light" node='a' onClick={this.signup}>
			      SIGNUP
			    </Button>
      	</div>
      </div>
      )
  }
}

export default SignUp;