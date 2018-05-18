import React, { Component} from 'react';
import {Row, Input, Button, Navbar, Collection, CollectionItem, Col, CardPanel, NavItem} from 'react-materialize';
import './css/Class.css';
class Class extends Component {

  constructor(props){
    super(props);
    console.log(this.props.match.params.Class);
    this.state = {
      class : this.props.match.params.Class,
      posts: []  
    }
    this.getList = this.getList.bind(this);
    this.getList();
    this.getPost = this.getPost.bind(this);
  } 

  getList(){
    fetch('http://localhost:3001/Post/Post-list/'+ this.state.class)
      .then((response) => {if(response.status === 404){
            alert('No Posts');
          }else{
            return response.json();
          }
        })
      .then((body) => {
        console.log(body)
        if(body !== undefined){
          this.setState({posts: body})
        }
      })
  }
  getPost(){
    return(
      <div>

      </div>
      )
  }
  
  render() {
    return (
      <div>
      	<div className="topnav"> 
        <Navbar className = "topnav" id = "helo" right>
          <NavItem>{this.state.username}</NavItem>
          <NavItem>{this.state.username}</NavItem>
        </Navbar>
        </div>
        <div>
          <h3 className="title">{this.state.class}</h3>
          <hr className="hr"></hr>
        </div>
        <div className="post-list-student">
          <h5>Posts</h5>
          <Collection>
          {
            this.state.posts.map((Posts) => {
              return <CollectionItem key = {Posts.title}> {Posts.title} <br/>Content: {Posts.content}<br/> Author: {Posts.author} <br/> Timestamp: {Posts.timestamp}
              </CollectionItem>  
            })
          }
          </Collection>
        </div>

      </div>
      )
  }
}

export default Class;