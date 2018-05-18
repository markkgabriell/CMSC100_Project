import React, { Component} from 'react';
import {Row, Input, Button, Navbar, Collection, CollectionItem, NavItem} from 'react-materialize';
import './css/Class.css';
class TeacherClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : this.props.location.state.username,
      classes: []  
    }
    this.getList = this.getList.bind(this);
    this.getList()
  }

  getList(){
    fetch('http://localhost:3001/Class/class-list/'+ this.state.username)
      .then((response) => {if(response.status === 404){
            alert('No Classes');
          }else{
            return response.json();
          }
        })
      .then((body) => {
        console.log(body)
        if(body !== undefined){
          this.setState({classes: body})
        }
      })
  }
  
  render() {
    return (
      <div>
      	<div className="topnav">
        <Navbar className = "topnav" id = "helo" right>
          <NavItem>{this.state.username}</NavItem>
          <NavItem href={'/login'}>Logout</NavItem>
        </Navbar>
        </div>
        <div>
          <h3 className="title">Classes</h3>
          <hr className="hr"></hr>
        </div>
        <Button floating large className='red' waves='light' icon='add' />
        <div className="class-list">
          <Collection>
          {
            this.state.classes.map((Class) => {
              return <CollectionItem key = {Class.title} username ={this.state.username} href={'/Teacher/Post/'+Class.title}>{Class.title}</CollectionItem>  
            })
          }
          </Collection>
        </div>
      </div>
      )
  }
}

export default TeacherClassList;