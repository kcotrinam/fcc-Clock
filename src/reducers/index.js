import timeReducer from './time';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	timeReducer,
});

export default allReducers;
