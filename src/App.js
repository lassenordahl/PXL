import React, { Component } from 'react';
import './App.css';

import Main from './components/Main.js'
import ColorPage from './components/ColorPage.js'

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/colorPage' component={ColorPage}/>
        </Switch>        
      </div>
    );
  }
}

export default App;
