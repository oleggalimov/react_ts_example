import { createStore, combineReducers } from 'redux';
import {step_reducer} from '../reducers/Step';
import { numberofplayers_reducer } from '../reducers/NumberOfPlayers';

export default ()=>{
    const store=createStore(
        combineReducers({
            step: step_reducer,
            players:numberofplayers_reducer
        }));
        return store;
} 