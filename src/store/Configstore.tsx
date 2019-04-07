import { createStore, combineReducers } from 'redux';
import {step_reducer} from '../reducers/Step';
import { numberofplayers_reducer } from '../reducers/NumberOfPlayers';
import { players_reducer } from '../reducers/Players';

export default ()=>{
    const store=createStore(
        combineReducers({
            step: step_reducer,
            players:numberofplayers_reducer,
            playersList:players_reducer,
        }));
        return store;
} 