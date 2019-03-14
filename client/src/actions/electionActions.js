import axios from 'axios';

import { ELECTION_LOADING, POST_ELECTION, GET_ERRORS, CLEAR_ERRORS } from './types';

// submit election
export const submitElection = (electiontData, callback) => (dispatch) => {
	dispatch(clearErrors());
	dispatch(setElectionLoading());
	axios
		.post('/api/elections', electiontData)
		.then((res) => {
			callback(true);
			dispatch({
				type: POST_ELECTION,
				payload: res.data
			});
		})
		.catch((err) => {
			callback(false);
			dispatch(setElectionLoading());
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			});
		});
};

// Set loading state
export const setElectionLoading = () => {
	return {
		type: ELECTION_LOADING
	};
};

// Clear Errors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};
