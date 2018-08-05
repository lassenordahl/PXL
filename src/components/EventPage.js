import React, { Component } from 'react';

class EventPage extends Component {
  render() {
    return (
      <div>{JSON.stringify(this.props.longitude, this.props.latitude)}</div>
    )
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ position: this.props.getCurrentPosition() }
    )}, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default EventPage;
