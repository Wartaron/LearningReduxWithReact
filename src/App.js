import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setData } from './actions/dataActions';

class App extends Component {
  render() {

    return(
        <div>
            hola
        </div>
    );
  }
}

function mapStateToProps(state){
    return {
        data: state.data,
        selectedData: state.selectedData
    }
}

App = connect(mapStateToProps)(App);

export default App;
