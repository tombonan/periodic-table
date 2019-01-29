import React, { Component } from 'react';

class Element extends Component {

    openInfo = (e) => {
        this.props.showInfo(this.props.id);
    }

    render() {
        return(
            <div 
              className = {`element element-${this.props.id} ${this.props.category}`}
              onClick={this.openInfo.bind(this)}
            >
              <p className = "number">{this.props.id}</p>
              <h3 className = "symbol">{this.props.symbol}</h3>
              <p className = "name">{this.props.name}</p>
            </div>
        );
    }
}

export default Element;
