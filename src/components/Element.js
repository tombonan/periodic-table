import React, { Component } from 'react';

class Element extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }

    onHover = (e) => {
        this.setState(prevState => ({
            hover: !prevState.hover
        }));
    };
    
    render() {
        return(
            <div 
              onMouseEnter={this.onHover.bind(this)}
              onMouseLeave={this.onHover.bind(this)}
              className = {`element element-${this.props.num} ${this.state.hover ? 'hover' : ''}`}
            >
              <p className = "number">{this.props.num}</p>
              <h3 className = "symbol">{this.props.symbol}</h3>
            </div>
        );
    }
}

export default Element;
