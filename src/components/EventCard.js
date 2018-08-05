import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EventCard extends Component {
  constructor(props) {
    super(props);

    console.log(props.eventData);
  }

  formatName(string) {
    var spacedString = string.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
  }

  render() {
    return (
        <div>
          <p>
            Name { this.formatName(this.props.eventData.name) }
          </p>
          <p>
            Length { this.props.eventData.data.resLen }
          </p>
          <p>
            Width { this.props.eventData.data.resWidth }
          </p>
        </div>
    );
  }
}

export default EventCard;
