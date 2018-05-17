import React, { Component} from 'react';
import {Row, Input, Button, Navbar} from 'react-materialize';
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
        <div className="posts">
          <form> 
            <textarea className="text-area" placeholder="Write something..."></textarea>
          </form>
          <Button id="post-button" waves="light">Submit</Button>
        </div>
      </div>
      )
  }
}

export default Class;