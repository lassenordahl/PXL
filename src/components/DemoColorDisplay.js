import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Error from '@material-ui/icons/Error';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { updateEmergency, getConfig, postConfig } from '../databaseOps'

const styles = {
  emergencyButton: {
    backgroundColor: 'darkgrey',
    position: 'absolute',
    bottom: 0,
    left: 0,
    margin: '25px'
  },
  textGroup: {
    paddingTop: '30px'
  },
  text: {
    marginTop: '0px'
  }
}

class DemoColorDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      debug: false
    }
  }

  handleClickOpen = () => {
    console.log(this.state.open);
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  }


  handleAlertClose = () => {
    this.setState({ open: false });

    updateEmergency(this.props.latitude, this.props.longitude, this.props.eventID)

    getConfig().then(snapshot => { 
      var newConfig = {
          patternName: 'alert',
          availablePatterns: []
      }
      snapshot.val().availablePatterns.map(value => {
        newConfig.availablePatterns.push({
            name: value.name,
        });
      })
          postConfig(newConfig);
      });
  };
  onClick = () => {
    this.setState({ debug: !this.state.debug });
  };
    
  render() {
    var color = this.props.color;
    var lat = this.props.latitude;
    var lon = this.props.longitude;
    return (
      <div
        style = {{backgroundColor : color, width: "25px", height: "25px"}}
        onClick={this.onClick}>
        <div style={ styles.textGroup }>
          <p style={ styles.text }>
            { this.state.debug ? this.props.latitude : null }
          </p>
          <p>
            { this.state.debug ? this.props.longitude : null }
          </p>
        </div>
      </div>
    )
  }
}

export default DemoColorDisplay;