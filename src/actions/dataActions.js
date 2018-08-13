import {SET_DATA} from '../actionTypes/actionTypes';

export function setData(data = []){
    console.log({
        type: SET_DATA,
        payload: data
    });
    return {
        type: SET_DATA,
        payload: data
    };
}
