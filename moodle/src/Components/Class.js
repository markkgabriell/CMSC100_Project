import React, { Component} from 'react';
import {Row, Input, Button, Navbar, Collection, CollectionItem, Col, CardPanel} from 'react-materialize';
import './css/Class.css';
class Class extends Component {
  
  
  render() {
    return (
      <div>
      	<div className="topnav">
        </div>
        <div>
          <h3 className="title">CMSC 100 UV-4L</h3>
          <hr className="hr"></hr>
        </div>
        <div className="post-list">
          <h5>Posts</h5>
          <Collection>
          <CollectionItem href='/class'>Alvin</CollectionItem>
          <CollectionItem href='#'>Alvin</CollectionItem>
          <CollectionItem href='#'>Alvin</CollectionItem>
          <CollectionItem href='#'>Alvin</CollectionItem>
          </Collection>
        </div>
        <div className="vertical-line"></div>
        <div className="posts">
          <form> 
            <textarea className="text-area" placeholder="Write something..."></textarea>
          </form>
          <Button id="post-button" waves="light">Submit</Button>
          <h4>TITLE</h4>
          <CardPanel id="card-panel">
            <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
          </CardPanel>
          
        </div>

      </div>
      )
  }
}

export default Class;