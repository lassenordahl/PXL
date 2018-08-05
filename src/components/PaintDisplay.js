import React, { Component } from 'react';

import ReactPaint from 'react-paint';


class Paint extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = {
            style: {
                background: 'tomato',
                /* Arbitrary css styles */
            },
            brushCol: '#ffffff',
            lineWidth: 10,
            className: 'react-paint',
            height: 500,
            width: 500,
            onDraw: () => {
                console.log('i have drawn!');
            },
        };
        return (<ReactPaint { ...props}/>);
    }
}


export default Paint;