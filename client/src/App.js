import React, { Component } from 'react';
import Card from './Card/Card.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Athiest Mingle</h1>
        <h2>Find Other Non-believers!</h2>
        <Card/>
      </div>
    );
  }
}

export default App;
