import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


function About() {
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80">
        <h1>Chris Rico</h1>
        <h2>Full Stack Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p style={{ color: 'white' }}>
            Hello, my Name is Chris Rico. I am currently enrolled in the UCLA extension coding course. I have been taught and now able to code with HTML, CSS and Javascript. Here on my portfolio I have a few projects that I created through out the course. My latest project is a "Movie Recomendation app". With multiple ajax calls, it returns the user various movie recomendations with a Youtube trailer embeded
            </p>



            <p>



            </p>
            <p>
            
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
