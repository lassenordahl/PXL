import React, { Component } from 'react';
import ColorDisplay from "./ColorDisplay.js"
import {getColor} from "../databaseOps.js"

class DemoEventPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "#FFFFFF",
    }
  }
  render() {
    return (
      <div>
        latitude: {this.props.latitude}
        longitude: {this.props.longitude}
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
      this.props.getCurrentPosition()
      getColor(this.props.latitude, this.props.longitude, this.props.eventId)
        .then(color => this.setState({
          color: color
      }))
    }, 200);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default DemoEventPage;