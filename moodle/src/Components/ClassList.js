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
        TEACHER

          <Collection>
          <CollectionItem href='/class'>Alvin</CollectionItem>
          <CollectionItem href='#'>Alvin</CollectionItem>
          <CollectionItem href='#'>Alvin</CollectionItem>
          <CollectionItem href='#'>Alvin</CollectionItem>
          </Collection>
        </div>
      </div>
      )
  }
}

export default ClassList;