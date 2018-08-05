import React, { Component } from 'react';
import ColorDisplay from "./ColorDisplay.js"

import { getConfig, getColorFunction, rainbow } from "../databaseOps.js"

class EventPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "#000000",
    }
  }
  render() {
    return (
      <div>
        <ColorDisplay
          latitude={this.props.latitude}
          longitude={this.props.longitude}
          eventID={this.props.eventId}
          color={this.state.color}
        />
      </div>

    )
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.getCurrentPosition();

      getConfig().then(snapshot => {
        let patternName = snapshot.val().patternName;
        getColorFunction(patternName)(this.props.latitude, this.props.longitude, this.props.eventId).then(color => {
          this.setState({color: color});
        });
      });
    }, 200);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default EventPage;
