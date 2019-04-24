import React, { Component } from 'react';
import Card from './Card/Card.js'
import Matches from './Matches/Matches.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
            <div id='mainDiv'>
              <Card/>
              <Matches/>
            </div>
      </div>
    );
  }
}

export default App;
