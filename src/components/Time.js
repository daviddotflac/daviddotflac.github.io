import React, { Component } from 'react';

class Time extends Component {
  constructor (props) {
    super (props);

    let n = new Date ();
    let y = n.getFullYear ();
    let m = n.getMonth () + 1;
    let d = n.getDate ();

    this.state = {
      time: new Date ().toLocaleTimeString (),
      date: m + '.' + d + '.' + y.toString ().slice (2, 4)
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
      time: new Date ().toLocaleTimeString ('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    });
  }

  render () {
    return (
      <div>
        <p> 
          <span className="time">{this.state.time} {this.state.date}</span>
        </p>
      </div>
    );
  }
}

export default Time;