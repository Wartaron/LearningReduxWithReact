import * as actionTypes from '../actionTypes/actionTypes';

export function setData(data = [1,2,3]){
    return {
        type: actionTypes.SET_DATA,
        payload: data
    };
}
