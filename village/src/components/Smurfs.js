// dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

// styles
import './Smurfs.css';

// components
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    console.log(`smurfs`, this.props);
    return (
      <div className='Smurfs'>
        <h1>The Sims: Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            console.log(`what props`, smurf);
            console.log(`func`, this.props);
            return (
              <Smurf
                age={smurf.age}
                deleteSmurf={this.props.deleteSmurf}
                height={smurf.height}
                id={smurf.id}
                key={smurf.id}
                name={smurf.name}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
