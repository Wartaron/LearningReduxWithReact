import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {BrowserRouter, Route, Link} from 'react-router-dom';
import { combineReducers, createStore } from 'redux';

class App extends Component {

  render() {

    const standarUser = {
        user: {
          name: "Will",
          age: 35
        },
        tweets: []
      };

    const userReducer = (state = {}, action) => {
      const newState = {...state};
      switch (action.type) {
        case "CHANGE_USER":
          newState.name = action.payload;
          break;
        case "CHANGE_AGE":
          newState.age = action.payload;
          break;
      }
      return newState;
    };

    const tweetsReducer = (state = [], action) => {
      return state;
    };

    const reducers = combineReducers({
      user: userReducer,
      tweets: tweetsReducer
    })

    const store = createStore(reducers);

    store.subscribe(()=> {
      console.log("store changed", store.getState());
    })

    store.dispatch({type: "CHANGE_USER", payload: "DANILO"});
    store.dispatch({type: "CHANGE_AGE", payload: 22});

    return (
      <div>
      </div>
    );
  }
}

export default App;
