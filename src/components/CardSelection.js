import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import EventCard  from './EventCard.js';

import getEvents from '../databaseOps.js';

class CardSelection extends Component {
    constructor(props) {
        super(props);
        this.events = getEvents();
        this.state = {
            testArray : [
                {
                    name: 'haha',
                }, {
                    name: 'what',
                }
            ]
        }
        console.log(this.state)
    }

    

    render() {
        return (
            <div>
                {this.state.testArray.map(function(event, index) {
                    return <Link key={ index } to='/colorPage'><EventCard/></Link>
                })}
                {/* <Link to='/colorPage'><EventCard/></Link>
                <Link to='/colorPage'><EventCard/></Link> */}
            </div>
        );
  }
}

export default CardSelection;
