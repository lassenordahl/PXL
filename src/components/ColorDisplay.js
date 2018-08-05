import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ErrorIcon from '@material-ui/icons/Error';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {updateEmergency} from '../databaseOps'

const styles = {
  emergencyButton: {
    backgroundColor: 'darkgrey',
    position: 'absolute',
    bottom: 0,
    left: 0,
    margin: '25px'
  }
}

class ColorDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  handleClickOpen = () => {
    console.log(this.state.open);
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    updateEmergency(this.props.latitude, this.props.longitude, this.props.eventID)
  };
    
  render() {
    var color = this.props.color;
    var lat = this.props.latitude;
    var lon = this.props.longitude;
    return (
      <div style = {{backgroundColor : color, width: "100vw", height: "100vh"}}>
        <IconButton style = { styles.emergencyButton } variant="fab" mini aria-label="Add" onClick={this.handleClickOpen}>
          <ErrorIcon style = {{ color: 'white' }}/>
        </IconButton>
        <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">

            <DialogTitle id="alert-dialog-title">{"Emergency Alert"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                You are about to send out an emergency alert to all PXL users. Are you sure you wan't to continue
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="secondary" autoFocus>
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
      </div>
    )
  }
}

export default ColorDisplay;
