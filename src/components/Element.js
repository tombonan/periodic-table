import React, { Component } from 'react';

class Element extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <div 
              className = {`element element-${this.props.id} ${this.props.category}`}
            >
              <p className = "number">{this.props.id}</p>
              <h3 className = "symbol">{this.props.symbol}</h3>
              <p className = "name">{this.props.name}</p>
            </div>
        );
    }
}

export default Element;
