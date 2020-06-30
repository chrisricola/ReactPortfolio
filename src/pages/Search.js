import React, { Component } from "react";
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
          <h1 className="text-center" style={{ color: 'white', marginBottom: 100, marginTop: 50}}>Contact Links, Resume and Github</h1>
          <br>
          </br>
          <SocialIcon url="https://github.com/chrisricola" style={{ height: 200, width: 200, marginLeft: 170 }}/>
          <SocialIcon url="https://www.linkedin.com/in/chrisricola/" style={{ height: 200, width: 200, marginLeft: 100 }}/>
          <SocialIcon url="mailto:chrir.r.rico@gmail.com" style={{ height: 200, width: 200, marginLeft: 100 }}/>
          <SocialIcon url="https://api.whatsapp.com/send?phone=3234824188&text=feel%20free%20to%20contact%20me" style={{ height: 200, width: 200, marginLeft: 170, marginTop: 100 }}/>
          <SocialIcon url="https://docs.google.com/document/d/1EoKzXhPOXUdCGN_OxYvHOUxH8yr48R4JSHeHyv5wbig/edit?usp=sharing" style={{ height: 200, width: 200, marginLeft: 100, marginTop: 100 }}/>
        </Container>
      </div>
    );
  }
}

export default Search;
