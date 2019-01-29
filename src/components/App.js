import React, { Component } from 'react';
import Element from './Element';
import { elementsList } from "../json/elements.js";

class App extends Component {
    render() {
        const data = elementsList;
        const elemListOne = data.slice(0,57);
        const elemListTwo = data.slice(71,88);
        const elemListThree = data.slice(102, data.length);
        
        const lancthanides = data.slice(57,70);
        const actinides = data.slice(89,102);
        const elemList = elemListOne.concat(elemListTwo, elemListThree, lancthanides, actinides);
        const elements = elemList.map((elem, index) =>
                                      <Element symbol={elem.symbol} id = {elem.number} key = {elem.number} name = {elem.name} category = {elem.category}/>
                                     );
    return (
        <div className="wrapper">
          <h1>Periodic Table of Elements</h1>
          <div className = "table">
            { elements }
          </div>
      </div>
    );
  }
}

export default App;
