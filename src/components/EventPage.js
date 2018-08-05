import React, { Component } from 'react';
import ColorDisplay from "./ColorDisplay.js"
import {getRegion} from "../databaseOps.js"


class EventPage extends Component {
  render() {
    return (
      <ColorDisplay
        color="#FF0000"
      />
    )
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.getCurrentPosition()
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default EventPage;
