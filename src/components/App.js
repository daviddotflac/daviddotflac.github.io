import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import Time from './Time';

function App () {
  const [content, setContent] = useState ();

  const getData = () => {
    fetch ("text.json"
    ,{
      headers : {
        "content-type": "application/json",
        "accept": "application/json"
      }
    }
    )
      .then ( function (res) {
        return res.json ();
      })
      .then ( function (text) {
        setContent (text.text);
      });
  };

  useEffect(() => {
    getData ();
  }, [content]);

  return (
    <Container>
      <h1 className="title">david.flac</h1>

      <Time />

      <p> {content} </p>

      <p>
        <span>Links:</span>
        <a className="link standalone-link" href="https://soundcloud.com/daviddotflac" target="_blank" rel="noopener noreferrer" title="https://soundcloud.com/daviddotflac">https://soundcloud.com/daviddotflac</a>
          
        <a className="link standalone-link" href="https://twitter.com/daviddotflac_" target="_blank" rel="noopener noreferrer" title="https://twitter.com/daviddotflac_">https://twitter.com/daviddotflac_</a>
      </p>
    </Container>
  );
}

export default App;
