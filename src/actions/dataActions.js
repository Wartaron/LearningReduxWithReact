import * as actionTypes from '../actionTypes/actionTypes';

export function setData(data = []){
    return {
        type: actionTypes.SET_DATA,
        payload: data
    };
}
