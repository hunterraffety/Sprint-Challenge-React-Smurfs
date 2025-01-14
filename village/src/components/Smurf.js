// dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

// styles
import './Smurf.css';

const Smurf = props => {
  console.log(props);
  return (
    <div className='Smurf'>
      <div className='card'>
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
      <button onClick={() => props.deleteSmurf(props.id)} className='btn'>
        Delete Smurf
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
