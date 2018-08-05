import React, { Component } from 'react';

import { getConfig } from '../databaseOps.js'

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class PatternSettings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            config: {
                availablePatterns: [],
                patternName: '',
                patternType: ''
            }
        }

        getConfig().then(snapshot => { 
            var newConfig = {
                patternName: snapshot.val().patternName,
                patternType: snapshot.val().patternType,
                availablePatterns: []
            }
            Object.keys(snapshot.val().availablePatterns).forEach(key => {
                newConfig.availablePatterns.push({
                    name: key,
                    type: snapshot.val().availablePatterns[key].type
                });
            })
            this.setState({config: newConfig})
            console.log(this.state.config);

        })
    }

    handleChange = eventName => event => {
        let newConfig = Object.assign({}, this.state.config);
        newConfig[eventName] = event.target.value;
        this.setState({config: newConfig});
    };

    render() {
        return (
            <div>
                <TextField
                    id="availablePatterns"
                    select
                    label="Select"
                    value={this.state.config.patternName}
                    onChange={this.handleChange('patternName')}
                    helperText="Select a pattern"
                    margin="normal">
                        {this.state.config.availablePatterns.map(pattern => (
                            <MenuItem key={pattern.name} value={pattern.name}>
                                {pattern.name} - {pattern.type}
                            </MenuItem>
                        ))}
                    </TextField>
            </div>
        )
    }
}

export default PatternSettings;
