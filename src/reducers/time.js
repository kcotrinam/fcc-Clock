const INITIAL_STATE = {
	session: 25,
	break: 5,
};

const timeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INCREMENT_SESSION':
			// console.log({state.session});
			return {
				...state,
				session: state.session + 1,
			};
		case 'DECREMENT_SESSION':
			return {
				...state,
				session: state.session - 1,
			};
		case 'INCREMENT_BREAK':
			return {
				...state,
				break: state.break + 1,
			};
		case 'DECREMENT_BREAK':
			return {
				...state,
				break: state.break - 1,
			};
		default:
			return state;
	}
};

export default timeReducer;
