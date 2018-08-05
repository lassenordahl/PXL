import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import Error from '@material-ui/icons/Error';

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
    
  render() {
    var color = this.props.color;
    return (
      <div style = {{backgroundColor : color, width: "100vw", height: "100vh"}}>
        <Button style = { styles.emergencyButton } variant="fab" mini aria-label="Add">
          <Error style = {{ color: 'white' }}/>
        </Button>
      </div>
    )
  }
}

export default ColorDisplay;
