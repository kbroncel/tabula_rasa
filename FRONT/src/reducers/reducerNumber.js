import {GET_RANDOM_NUMBER} from '../actions/actionIndex.js';
export default function(state = {number: 0}, action){
    switch (action.type){
        case GET_RANDOM_NUMBER:
            return {
                number: action.payload
            }
        default: 
            return state;
    }
}