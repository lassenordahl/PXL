import React, { Component } from 'react';

import { getConfig } from '../databaseOps.js'

class PatternSettings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            config: {}
        }

        getConfig().then(snapshot => { 
            this.setState({config: snapshot.val()})
            console.log(this.state.config);

        })
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default PatternSettings;
