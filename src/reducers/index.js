//the reducers are the initialization of the state and the ways to manipulate it, actions are the functions that utilize and execute 
import itemCounter from './itemCounter';

//combine reducers is self explanatory
import {combineReducers} from 'redux';

//here it is all put into an object
const allReducers = combineReducers({
    itemCounter
})

export default allReducers;