import {FETCH_WEATHER} from '../actions/index';

/**
 * Created by Shuhei on 2016/10/10.
 */
export default function(state = [], action){
    switch (action.type){
        case  FETCH_WEATHER:
            return [action.payload.data, ...state];
    }
    return state;
}