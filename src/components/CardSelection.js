import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import EventCard  from './EventCard.js';

import { getEvents } from '../databaseOps.js';

const styles = {
    link: {
        textDecoration: 'none'
    }
}

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
                    data: childSnapshot.val()
                });
                this.setState({ events: event });
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.events.map(function(event, index) {
                    return <Link style = { styles.link } key = { index } to={'/eventPage/' + event.name}><EventCard eventData={ event }/></Link>
                })}
            </div>
        );
  }
}
export default CardSelection;
