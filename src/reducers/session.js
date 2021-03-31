const INITIAL_STATE = 25;

const sessionReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INCREMENT_SESSION':
			return state + 1;
		case 'DECREMENT_SESSION':
			return state - 1;
		default:
			return state;
	}
};

export default sessionReducer;
