import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class SecondComponent extends Component {
  constructor() {
    super();

    this.state = {
      items: ['Danio', 'Plazas', 'Camargo', 'Esteban'],
      index: 0
    }
  }

  render(){
    return(
      <div>
        {this.state.items[this.props.index]}
        {console.log(this.props.object)}
      </div>
    );
  }
}

export default SecondComponent;
