import React, { Component} from 'react';
import {Row, Input, Button, Navbar} from 'react-materialize';
import './css/Login.css';
class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      name: '',
      username: '',
      password: '',
      usertype: ''
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.login = this.login.bind(this);
  }
    handleChangeUsername(e){
      this.setState({username: e.target.value});
    }
    handleChangePassword(e){
      this.setState({password: e.target.value});
    }

    login(){
      fetch('http://localhost:3001/User/login/' + this.state.username)
        .then((response) => {
          if(response.status === 404){
            alert('Not found');
            this.props.history.push('/login');
          }else{
            return response.json();
          }
        })
        .then((body) => {
          if(body !== undefined){
            if(this.state.password === body.password){
            this.setState({
              email : body.email,
              name : body.name,
              username : body.username,
              password : body.password,
              usertype: body.usertype
            })
            if(this.state.usertype == 'Teacher'){
              this.props.history.push('/Teacher/class-list', {username: this.state.username});  
            }else{
              this.props.history.push('/Student/class-list', {username: this.state.username});
            }
          }else{
            console.log(this.state.password);
            alert("Wrong Credentials");
            this.props.history.push('/login');
          }
        }else{
            console.log('blep');
          }
      })
    }
  render() {
    return (
      <div>
      	<h4 id="log-header">SIGN IN</h4>
      	<div className="log-fields">
      		<Input type="email"  onChange={this.handleChangeUsername} label="Email"/>
      		<Input type="password" onChange={this.handleChangePassword} label="Password"/>
      		<Button waves="light" node='a' onClick={this.login}>

			LOGIN
			</Button>
			<p>Don't have an account? <span><a href='/sign-up'>Sign Up</a></span></p>
      	</div>
      </div>
      )
  }
}

export default Login;