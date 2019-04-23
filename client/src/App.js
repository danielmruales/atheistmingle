import React, { Component } from 'react';
import Card from './Card/Card.js'
import Matches from './Matches/Matches.js'
import Split from 'react-split'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Athiest Mingle</h1>
        <h2>Find Other Non-believers!</h2>
        {/* <Split sizes={[75,25]}> */}
          {/* <div className='container'> */}
            <Card/>
            <Matches/>
          {/* </div> */}
        {/* </Split> */}
      </div>
    );
  }
}

export default App;
