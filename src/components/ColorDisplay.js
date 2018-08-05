import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

class ColorDisplay extends Component {
    
  render() {
    var color = this.props.color;
    return (
      <div style={{backgroundColor : color, width: "100vw", height: "100vh"}}>
        {color}
      </div>
    )
  }
}

export default ColorDisplay;
