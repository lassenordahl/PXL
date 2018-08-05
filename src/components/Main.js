import React, { Component } from 'react';
import CardSelection from './CardSelection.js'
import InfoIcon from '@material-ui/icons/Help';
import { IconButton } from '../../node_modules/@material-ui/core';
import grey from '@material-ui/core/colors/grey'

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
  },
  info: {
    float: 'right',
    marginTop: '-7.4px',
    color: grey[900]
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
            <IconButton style={ styles.info } aria-label="Info">
              <InfoIcon style={ styles.info }/>
            </IconButton>
          </h2>
        </div>
        <CardSelection/>  
      </div>
    );
  }
}

export default Main;
