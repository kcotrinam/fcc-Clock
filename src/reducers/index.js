import breakReducer from './break';
import sessionReducer from './session';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	breakReducer,
	sessionReducer,
});

export default allReducers;
