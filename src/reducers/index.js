//REDUCER IMPORTS
import itemCounter from './itemCounter';

//REDUX IMPORTS
import {combineReducers} from 'redux';

//ALL REDUCERS OBJECT
const allReducers = combineReducers({
    itemCounter,
});

export default allReducers;