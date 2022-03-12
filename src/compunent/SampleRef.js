import React, { Component } from 'react';

class Nameref extends Component {
    constructor(props) {
        super(props);
        this.sampleRef=React.createRef();
    }
    render() {
        return (
            <div>
                <p ref={this.sampleRef} onClick={() => console.log(this.sampleRef.current)}>this is sample</p>
            </div>
        );
    }
}

export default Nameref;
