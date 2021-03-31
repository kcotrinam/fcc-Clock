const INITIAL_STATE = 5;

const breakReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INCREMENT_BREAK':
			return state + 1;
		case 'DECREMENT_BREAK':
			return state - 1;
		default:
			return state;
	}
};

export default breakReducer;
