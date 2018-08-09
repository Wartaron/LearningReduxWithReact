import { combineReducers } from 'redux';

import data from './dataReducer';
import selectedData from './selectedDataReducer';

const reducers = combineReducers({
    data,
    selectedData
});

export default reducers;
