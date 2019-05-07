import React, { Component } from 'react';
import {Switch, Route} from 'react-dom'
import Card from './Card/Card.js'
import Matches from './Matches/Matches.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
            <div id='mainDiv'>
              <Switch>
                <Route exact path='/card' component={Card}/>
                <Route path='/matches' component={Matches}/>
              </Switch>
            </div>
      </div>
    );
  }
}

export default App;
