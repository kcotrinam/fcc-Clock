const INITIAL_STATE = {
	session: 25,
	break: 5,
};

const timeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INCREMENT_SESSION':
			return {
				...state,
				session: state.session < 60 ? state.session + 1 : state.session,
			};
		case 'DECREMENT_SESSION':
			return {
				...state,
				session: state.session <= 1 ? state.session : state.session - 1,
			};
		case 'INCREMENT_BREAK':
			return {
				...state,
				break: state.break > 59 ? state.break : state.break + 1,
			};
		case 'DECREMENT_BREAK':
			return {
				...state,
				break: state.break <= 1 ? state.break : state.break - 1,
			};
		case 'RESET_COUNTERS':
			return {
				session: 25,
				break: 5,
			};
		default:
			return state;
	}
};

export default timeReducer;
