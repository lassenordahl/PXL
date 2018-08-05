import React, { Component } from 'react';
import ColorDisplay from "./ColorDisplay.js"
import {getColor} from "../databaseOps.js"


class EventPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "#FFFFFF"
    }
  }
  render() {
    return (
      <div>
        latitude: {this.props.latitude}
        longitude: {this.props.longitude}
        <ColorDisplay
          color={this.state.color}
        />
      </div>

    )
  }
  componentDidUpdate(prevProps) {
    if (this.props.latitude && this.props.longitude) {
      getColor(this.props.latitude, this.props.longitude, this.props.eventId)
      .then(color => this.setState({
        color: color
      }))
    }
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
