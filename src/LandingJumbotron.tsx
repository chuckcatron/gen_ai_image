import React from 'react';
import Container from 'react-bootstrap/Container';

function LandingJumbotron() {
  return (
    <div className="jumbotron jumbotron-landing d-flex align-items-center min-vh-100">
      <Container className="text-center">
        <h1 className="display-4" style={{color: 'white', fontSize: '6.2em'}}>Instant AI</h1><br />
        <h4 className="lead" style={{color: 'white'}}>AI image generation for humans.</h4>
      </Container>
    </div>
  );
}

export default LandingJumbotron;