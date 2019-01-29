import React, { Component, Fragment } from 'react';
import Element from './Element';
import { elementsList } from "../json/elements.js";
import filterElement from './filterElement';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            activeElement: []
        };
    }

    showInfo = (id) => {
        this.setState({ visible: true, activeElement: filterElement(id) });
    }

    hideInfo = () => {
        this.setState({ visible: false, activeElement: [] });
    };

    
    render() {
        const data = elementsList;
        // Separate out lancthanides and actinides from central elements
        const lancthanides = data.slice(57,71);
        const actinides = data.slice(89,103);
        const elemList = data.slice(0,57).concat(data.slice(71,89), data.slice(103, data.length), lancthanides, actinides);
        const elements = elemList.map((elem, index) =>
                                      <Element symbol={elem.symbol} id = {elem.number} key = {elem.number} name = {elem.name} category = {elem.category} showInfo = {this.showInfo}/>
                                     );
    return (
        <div className="wrapper">
          <h1>Periodic Table of Elements</h1>
          <div className = "table">
            { elements }
            {this.state.visible ? (
                <Fragment>
                  <div className = {`info-box ${this.state.activeElement[0].category}`}>
                    <h2>{this.state.activeElement[0].number}</h2>
                    <h1>{this.state.activeElement[0].symbol}</h1>
                  </div>
                  <div className = "info">
                    <div
                      onClick={this.hideInfo}
                      className="close">
                      [&times;]
                    </div>
                    <h1>{this.state.activeElement[0].name}</h1>
                  </div>
                </Fragment>
        )
         : ""
        }
          </div>
      </div>
    );
  }
}

export default App;
