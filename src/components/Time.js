import React, { Component } from 'react';

class Time extends Component {
  constructor (props) {
    super (props);

    this.state = {
      time: new Date ().toLocaleTimeString ()
    }
  }

  componentDidMount () {
    this.interval = setInterval (() => this.updateTime (), 1000);
  }

  componentWillUnmount () {
    clearInterval (this.interval);
  }

  updateTime () {
    this.setState ({
      time: new Date ().toLocaleTimeString ()
    });
  }

  render () {
    return (
      <div className="time">
        <p> {this.state.time} </p>
      </div>
    );
  }
}

export default Time;