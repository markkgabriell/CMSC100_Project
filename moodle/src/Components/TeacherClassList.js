import React, { Component} from 'react';
import {Row, Input, Button, Navbar, Collection, CollectionItem, NavItem, Modal, ReactTooltip} from 'react-materialize';
import './css/Class.css';
const request = require('request')
class TeacherClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : this.props.location.state.username,
      classes: [],
      title: ""  
    }
    this.getList = this.getList.bind(this);
    this.getList()
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.add=this.add.bind(this)
  }

  handleChangeTitle(e){
      this.setState({title: e.target.value});
  }

  add(e){
    console.log(this.state.title)
    if(this.state.title){

    return request.post(
      'http://localhost:3001/Class/add', {
        form : {title: this.state.title, teacher: this.state.username, students: []}
      }, (error, response, body) => {
        console.log(body);
        this.props.history.push('/Teacher/class-list', {username: this.state.username})
      })
    }
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
      	<div>
          <Navbar className="topnav" right>
           <NavItem>{this.state.username}</NavItem>
            <NavItem>Logout</NavItem>
          </Navbar>
        </div>
        <div>
          <h3 className="title">Classes</h3>
          <hr className="hr"></hr>
        </div>
       
        <div className="class-list">
            <Modal
             header='Add Class'
             actions={
                <div >
                  <Button id="buttons" waves="light" onClick={this.add}>Add</Button>
                </div>
              }
             trigger={<Button floating large className='red' waves='light' icon='add' data-tip="Add Class" />}>
             <Input type="text" label="Class Title" onChange={this.handleChangeTitle}></Input>
            </Modal>
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