import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class App extends Component {
  render () {
    return (
      <Container>
        <h2>david.flac</h2>
        <p>
          <strong>Links:</strong>
          <a className="link standalone-link" href="https://soundcloud.com/daviddotflac" target="_blank" rel="noopener noreferrer" title="https://soundcloud.com/daviddotflac">https://soundcloud.com/daviddotflac</a>
          
          <a className="link standalone-link" href="https://twitter.com/daviddotflac_" target="_blank" rel="noopener noreferrer" title="https://twitter.com/daviddotflac_">https://twitter.com/daviddotflac_</a>
        </p>
      </Container>
    );
  }
}

export default App;
