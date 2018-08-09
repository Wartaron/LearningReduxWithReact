import React, { Component } from 'react';
import { connect } from 'react-redux';

connect((store) => {
    return{
        data: store.data.data
    };
})
class App extends Component {

    componentWillMount(){
        this.props.dispatch
    }

  render() {

    return(
        <div>
        </div>
    );
  }
}

export default App;
