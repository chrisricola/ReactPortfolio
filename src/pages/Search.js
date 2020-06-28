import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Container from "../components/Container";
import { SocialIcon } from 'react-social-icons';

// import * as networks from '../src/networks.js'
class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: ""
  };



  render() {
    return (
      <div>
        <Container className= "container" style={{ minHeight: "80%" }}>
          <br>
          
          </br>
          <h1 className="text-center" style={{ color: 'white', marginBottom: 100, marginTop: 50}}>Social Media Links</h1>
          <br>
          </br>
          <SocialIcon network="github" style={{ height: 200, width: 200, marginLeft: 170 }}/>
          <SocialIcon url="https://www.linkedin.com/in/chrisricola/" style={{ height: 200, width: 200, marginLeft: 100 }}/>
         
        </Container>
      </div>
    );
  }
}

export default Search;
