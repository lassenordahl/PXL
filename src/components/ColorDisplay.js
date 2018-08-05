import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

class ColorDisplay extends Component {
    
  render() {
    var color = this.props.color;
    return (
      <div style={{backgroundColor : color, width: "100vw", height: "100vh"}}>
        {/* <Button variant="fab" mini color="secondary" aria-label="Add">
        </Button> */}
      </div>
    )
  }
}

export default ColorDisplay;
