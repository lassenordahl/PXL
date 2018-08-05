import React, { Component } from 'react';

import DrawableCanvas from 'react-drawable-canvas';


class Paint extends Component {

    render() {
        return <div style={{width: 500, height: 500}}> <DrawableCanvas lineWidth= {10} canvasStyle = {{backgroundColor: '#ffdab9'}} /></div>;
    }
}


export default Paint;