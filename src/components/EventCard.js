import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import OutsideLands from '../assets/OutsideLands.png'

const styles = {
  card: {
    margin: '30px',
    maxWidth: '450px',
    borderRadius: '30px',
    minHeight: '300px',
    backgroundPosition: 'center',
    position: 'relative'
  },
  title: {
    textAlign: 'left',
    margin: '28px',
    color: 'white'
  },
  description: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    color: 'white',
    width: '100%'
  },
  outsideLands: {
    backgroundImage: 'url(' + require('../assets/OutsideLands.png') + ')',
    backgroundSize: '520px'
  },
  coachella: {
    backgroundImage: 'url(' + require('../assets/OutsideLands.png') + ')',
    backgroundSize: '500px'
  }
};

class EventCard extends Component {
  constructor(props) {
    super(props);

    console.log(props)

    console.log(props.eventData);
  }

  formatName(string) {
    var spacedString = string.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
  }

  render() {
    return (
        <div>
          <Card style = {{...styles.card,...styles[this.props.eventData.name]}} elevation={ 4 }>
            <div>
              <h3 style = { styles.title }>
                { this.formatName(this.props.eventData.name) }
              </h3>
              <p style = { styles.description } >
                Length { this.props.eventData.data.resLen }
                Width { this.props.eventData.data.resWidth }
              </p>
            </div>
          </Card>
        </div>
    );
  }
}

export default EventCard;
