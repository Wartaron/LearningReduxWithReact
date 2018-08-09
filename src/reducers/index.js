import { combineReducers } from 'redux';

import data from './dataReducer';
import selectedData from './selectedDataReducer';

export default combineReducers({
    data,
    selectedData
});
