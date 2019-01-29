import React, { Component } from 'react';
import Element from './Element';
import { elementsList } from "../json/elements.js";

class App extends Component {
    render() {
        const data = elementsList;
        const listElements = data.map((elem, index) =>
                                      <Element symbol={elem.symbol} num = {index + 1}/>
                                     );
    return (
        <div className="wrapper">
          <h1>Periodic Table of Elements</h1>
          <div className = "table">{ listElements }</div>
      </div>
    );
  }
}

export default App;
