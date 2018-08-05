import React, { Component } from 'react';
import DemoColorDisplay from "./DemoColorDisplay.js"

import { getConfig, getColorFunction, rainbow } from "../databaseOps.js"

class DemoEventPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "#FFFFFF",
    }
  }

  render() {
    if(this.props.new == true){
      return (
        <div>
          <DemoColorDisplay
            row={this.props.row}
            latitude={this.props.latitude}
            longitude={this.props.longitude}
            eventID={this.props.eventId}
            color={this.state.color}
          />
        </div>
  
      )
    }
    return (
      <div style={{float:"left"}}>
        <DemoColorDisplay
          row={this.props.row}
          latitude={this.props.latitude}
          longitude={this.props.longitude}
          eventID={this.props.eventId}
          color={this.state.color}
        />
      </div>

    )
  }
  componentDidMount() {
      getConfig().then(snapshot => {
        let patternName = snapshot.val().patternName;
        getColorFunction(patternName)(this.props.latitude, this.props.longitude, this.props.eventId).then(color => {
          this.setState({color: color});
        });
      });
  }
}

export default DemoEventPage;