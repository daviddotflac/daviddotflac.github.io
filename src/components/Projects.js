import React from 'react';
import jpeg from '../res/demo-mixtape-two.JPEG';

function Projects () {
  return (
    <div>
      <a href="https://soundcloud.com/daviddotflac/sets/demo-mixtape-2" title="demo mixtape 2" target="_blank" rel="noopener noreferrer">
        <img className="photo" src={ jpeg } alt="demo mixtape 2" />
      </a>
    </div>
  );
}

export default Projects;