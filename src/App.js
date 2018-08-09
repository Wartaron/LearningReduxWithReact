import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setData } from './actions/dataActions';

connect((store) => {
    return{
        data: store.data.data,
        selectedData: store.selectedData
    };
})
class App extends Component {
    componentWillMount(){
        setData();
    }
  render() {
      console.log(this.props.data);
    return(
        <div>
        </div>
    );
  }
}

export default App;
