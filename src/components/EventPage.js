import React, { Component } from 'react';
import ColorDisplay from "./ColorDisplay.js"
import {getColor} from "../databaseOps.js"
import {updateRegionBlink} from "../databaseOps.js"

class EventPage extends Component {
  mod(n, m) {
    return ((n % m) + m) % m;
  }
  constructor(props) {
    super(props)
    this.state = {
      pattern: "blink",
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
        {this.mod(this.props.latitude * 150000, 100)}
        {this.mod(this.props.longitude * 150000, 100)}
      </div>

    )
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.getCurrentPosition()
      if (this.props.latitude && this.props.longitude) {
        if (this.state.pattern == "rainbow") {
          this.setState({color:
            "hsl(" + this.mod(this.props.latitude * 150000, 100) / 100 * 360 + ", 100%, 50%)"
          })
        } else if (this.state.pattern=="blink") {
          updateRegionBlink(this.props.eventId)
          getColor(this.props.latitude, this.props.longitude, this.props.eventId)
            .then(color => this.setState({
              color: color
          }))
        }
      }
    }, 200);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default EventPage;
