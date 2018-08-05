import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    margin: '30px',
    maxWidth: '450px',
    borderRadius: '30px',
    minHeight: '300px'
  }
};

class EventCard extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    console.log(props.eventData);
  }

  formatName(string) {
    var spacedString = string.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
  }

  render() {
    return (
      <Card style = { styles.card } elevation={ 2 }>
        <Link key={ this.props.index} to={'/eventPage/' + this.props.eventData.name}>
          <p>
            Name { this.formatName(this.props.eventData.name) }
          </p>
          <p>
            Length { this.props.eventData.data.resLen }
          </p>
          <p>
            Width { this.props.eventData.data.resWidth }
          </p>
        </Link>
      </Card>    
    );
  }
}

export default EventCard;
