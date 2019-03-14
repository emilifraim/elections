import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import electionReducer from './electionReducer';

export default combineReducers({
	errors: errorReducer,
	election: electionReducer
});
