import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';


ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
