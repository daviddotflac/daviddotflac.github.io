import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import Time from './Time';
import List from './List';
import Projects from './Projects';

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

      <p>{content}</p>

      <Projects />
      <List />
    </Container>
  );
}

export default App;
