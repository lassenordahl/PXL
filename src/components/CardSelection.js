import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import EventCard  from './EventCard.js'

class CardSelection extends Component {
  render() {
    return (
        <div>
            <Link to='/colorPage'><EventCard/></Link>
            <Link to='/colorPage'><EventCard/></Link>
        </div>
    );
  }
}

export default CardSelection;
