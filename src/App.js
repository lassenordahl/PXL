import React, { Component } from 'react';
import './App.css';

import Main from './components/Main.js'
import AddEventPage from './components/AddEventPage.js'
import PatternSettings from './components/PatternSettings.js'

import GeolocationWrapper from './components/GeolocationWrapper.js'

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/admin' component={AddEventPage}/>
          <Route exact path='/patternConsole' component={PatternSettings}/>
          <Route path='/eventPage/:eventName' component={GeolocationWrapper}/>
        </Switch>        
      </div>
    );
  }
}

export default App;
