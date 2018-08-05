import React, { Component } from 'react';

import CardSelection from './CardSelection.js'

const styles = {
  container: {
    margin: '30px'
  },
  title: {
    textAlign: 'left',
    marginLeft: '45px'
  },
  icon: {
    float: 'left',
    width: '32px'
  }
};

class Main extends Component {
  render() {
    return (
      <div>
        <div style = { styles.container }>
          <img style = { styles.icon } src = { require('../assets/PXL.png') } />
          <h2 style = { styles.title }>
            PXL
          </h2>
        </div>
        <CardSelection/>  
      </div>
    );
  }
}

export default Main;
