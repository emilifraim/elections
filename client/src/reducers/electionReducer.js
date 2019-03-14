import { ELECTION_LOADING, POST_ELECTION } from '../actions/types';

const initialState = {
	election: {},
	userData: {},
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ELECTION_LOADING:
			return {
				...state,
				loading: !state.loading
			};

		case POST_ELECTION:
			return {
				...state,
				election: action.payload[0],
				userData: action.payload[1],
				loading: false
			};
		default:
			return state;
	}
}
