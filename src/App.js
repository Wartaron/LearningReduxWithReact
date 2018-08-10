import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setData } from './actions/dataActions';
import * as SelectedDataActions from './actions/selectedDataActions';

class App extends Component {

    componentDidMount(){
        this.props.actions.DataActions.setData([1,2,3,4,5,6,'danilo']);
    }
  render() {
      console.log(this.props);
      const datos = this.props.data.map((dato, i) => {
          return <h1 key={i}>{dato}</h1>
      });
    return(
        <div>
            {datos}
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        data: state.data.data,
        selectedData: state.selectedData.selectedData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            SelectedDataActions: bindActionCreators(SelectedDataActions, dispatch),
            DataActions: bindActionCreators({setData}, dispatch)
        }
    }
}


App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
