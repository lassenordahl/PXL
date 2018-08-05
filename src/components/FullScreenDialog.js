import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import InfoIcon from '@material-ui/icons/Help';
import grey from '@material-ui/core/colors/grey'
import { DialogContent, DialogContentText } from '../../node_modules/@material-ui/core';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  info: {
    float: 'right',
    marginTop: '-25.4px',
    color: grey[900]
  },
  appBar: {
      backgroundColor: grey[50]
  },
  appBarInfo : {
      color: grey[900]
  },
  dialogContent: {
      paddingTop: '90px'
  }

};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
    <IconButton style={ styles.info } aria-label="Info" onClick = {this.handleClickOpen}>
        <InfoIcon style = { styles.info }/>
    </IconButton>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
        <AppBar className={classes.appBar} style={ styles.appBar }>
            <Toolbar >
              <IconButton style= {styles.appBarInfo} onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="headline" style = {styles.appBarInfo} className={classes.flex}>
                Information
              </Typography>
            </Toolbar>
        </AppBar>
            <DialogContent>
                <DialogContentText style = {styles.dialogContent}>
                <Typography variant="title"> Welcome to PXL </Typography>
                <br/>
                <Typography variant="body2">
                    PXL is a concert experience that is meant to bring people together using modern technologies and the phones in our pocket.
                    <br/>
                    <br/>
                    Choose what event you are currently at, hold up your phone when prompted, and watch the magic happen.
                    <br/>
                    <br/>
                    If you are in a dangerous situation during the concert and need to get out immediately, press the <strong>EMERGENCY</strong> button on the screen of the event, and users around you will be notified that you need to get out of the crowd.
                </Typography>
                </DialogContentText>
            </DialogContent>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);
