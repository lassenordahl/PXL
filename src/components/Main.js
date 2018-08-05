import React, { Component } from 'react';
import CardSelection from './CardSelection.js'
import FullScreenDialog from './FullScreenDialog.js';


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
    width: '30px'
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
            <FullScreenDialog/>
          </h2>
        </div>
        <CardSelection/>  
      </div>
    );
  }
}

export default Main;
