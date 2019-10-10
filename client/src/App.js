import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Card from './Card/Card.js'
import Matches from './Matches/Matches.js'
import Messages from './Messages/Messages.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
            <div id='mainDiv'>
              <Card/>
              <Switch>
                <Route exact path='/' component={Matches}/>
                <Route path ='/messages' component={Messages}/>
              </Switch>
            </div>
      </div>
    );
  }
}

export default App;
