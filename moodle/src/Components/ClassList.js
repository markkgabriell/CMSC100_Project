import React, { Component} from 'react';
import {Row, Input, Button, Navbar, Collection, CollectionItem} from 'react-materialize';
import './css/Class.css';
class ClassList extends Component {
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
      .then((response) => { return response.json() })
      .then((body) => {
        console.log("body")
        this.setState({
          classes: body
        })
      })
  }
  
  render() {
    return (
      <div>
      	<div className="topnav">
        </div>
        <div>
          <h3 className="title">Classes</h3>
          <hr className="hr"></hr>
        </div>
        <div className="class-list">
          <Collection>
          {
            this.state.classes.map((Class) => {
              return <CollectionItem href='/class'>{Class.title}</CollectionItem>  
            })
          }
          </Collection>
        </div>
      </div>
      )
  }
}

export default ClassList;