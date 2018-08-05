import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import EventCard  from './EventCard.js';

import { getEvents } from '../databaseOps.js';

class CardSelection extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            events: []
        }
 
        getEvents().then(snapshot => {
            snapshot.forEach(childSnapshot => {
                var event = this.state.events.concat({
                    name: childSnapshot.key,
                });
                this.setState({ events: event });
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.events.map(function(event, index) {
                    return <Link key={ index } to='/colorPage'>{ event.name }</Link>
                })}
                {/* <Link to='/colorPage'><EventCard/></Link>
                <Link to='/colorPage'><EventCard/></Link> */}
            </div>
        );
  }
}
export default CardSelection;
