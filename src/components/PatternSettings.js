import React, { Component } from 'react';

import { getConfig, postConfig } from '../databaseOps.js'

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = {
    textField: {
        width: '250px'
    }
}

class PatternSettings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            config: {
                availablePatterns: [],
                patternName: ''
            }
        }

        getConfig().then(snapshot => { 
            var newConfig = {
                patternName: snapshot.val().patternName,
                availablePatterns: []
            }
            console.log();
            snapshot.val().availablePatterns.map(value => {
                newConfig.availablePatterns.push({
                    name: value.name,
                });
            })
            this.setState({config: newConfig})
        })
    }

    handleChange = eventName => event => {
        let newConfig = Object.assign({}, this.state.config);
        newConfig.patternName = event.target.value;

        this.setState({config: newConfig});
    };

    saveConfigInformation = () => {
        postConfig(this.state.config);
    }

    render() {
        return (
            <div>
                <TextField
                    style={ styles.textField }
                    id="availablePatterns"
                    select
                    label="Select"
                    value={this.state.config.patternName}
                    onChange={this.handleChange('patternName')}
                    helperText="Select a pattern"
                    margin="normal">
                        {this.state.config.availablePatterns.map(pattern => (
                            <MenuItem key={pattern.name} value={pattern.name}>
                                {pattern.name}
                            </MenuItem>
                        ))}
                </TextField>
                <Button onClick={this.saveConfigInformation} color="primary">
                    Submit
                </Button>
            </div>
        )
    }
}

export default PatternSettings;
