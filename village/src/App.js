// dependencies
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// styles
import './App.css';

// components
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({ smurfs: res.data });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  addSmurf = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        console.log(`... res from func.`, res);
        this.setState({ smurfs: res.data });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className='App'>
        <div className='nav'>
          <NavLink exact to='/' className='navlink'>
            <h1>Smurfemon - don't catch them all.</h1>
          </NavLink>
          <span className='sub'>All The Smurfs!</span>
          <nav>
            <NavLink exact to='/' className='navlink'>
              Home
            </NavLink>
            <NavLink to='/smurf-form' className='navlink'>
              Add A Smurf
            </NavLink>
          </nav>
        </div>
        <Route
          exact
          path='/'
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          exact
          path='/smurf-form'
          render={props => (
            <SmurfForm
              {...props}
              addSmurf={this.addSmurf}
              smurfs={this.state.smurfs}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
