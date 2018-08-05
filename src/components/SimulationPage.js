import React, { Component } from 'react';
import DemoEventPage from "./DemoEventPage.js"
import {getEvents} from "../databaseOps"

class SimulationPage extends Component {
    
    constructor(props) {
        super(props)
        this.eventId = "outsideHacks"

        this.state = {
            latne: '',
            latsw: '',
            lonne: '',
            lonsw: ''
        }

        getEvents().then(snapshot => {
            this.setState({
                latne: snapshot.val()[this.eventId].latne,
                latsw: snapshot.val()[this.eventId].latsw,
                lonne: snapshot.val()[this.eventId].lonne,
                lonsw: snapshot.val()[this.eventId].lonsw
            })});


    }

  render(){

    var indents = [];
    for (var j = 0; j < 30; j++) {
        for (var i = 0; i < 30; i++) {
            var latlon = this.getScreenPosition(i,30-j)
            if (i == 29){
                indents.push(<DemoEventPage latitude={latlon[0]} longitude={latlon[1]} new={true} eventId="outsideHacks"/>);
            }else{
                indents.push(<DemoEventPage latitude={latlon[0]} longitude={latlon[1]} new={false} eventId="outsideHacks"/>);
            }
        }
    }

    return(
            // <DemoEventPage 
            // latitude={latitude}
            // longitude={longitude}
            // eventId={this.props.match.params.eventName}
            // />
            <div>
                {indents}
            </div>
        )
    }
    getScreenPosition(xPosBox, yPosBox) {
        console.log(this.state.latne)
        console.log(this.state.latsw)
        var deltaY = (this.state.latne - this.state.latsw)/30
        var deltaX = (this.state.lonne - this.state.lonsw)/30
        var lat = this.state.latsw+deltaY*yPosBox
        var lon = this.state.lonsw+deltaX*xPosBox


        return [lat, lon]
      }
}

export default SimulationPage;