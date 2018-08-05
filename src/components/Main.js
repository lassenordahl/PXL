import React, { Component } from 'react';

import CardSelection from './CardSelection.js'

const styles = {
  title: {
    margin: '30px',
    textAlign: 'left'
  }
};

class Main extends Component {
  render() {
    return (
      <div>
        <h2 style = { styles.title } >
          AppName
        </h2>
        <CardSelection/>  
      </div>
    );
  }
}

export default Main;
