export const incrementSession = () => {
	return {
		type: 'INCREMENT_SESSION',
		payload: false,
	};
};

export const decrementSession = () => {
	return {
		type: 'DECREMENT_SESSION',
		payload: false,
	};
};

export const incrementBreak = () => {
	return {
		type: 'INCREMENT_BREAK',
		payload: false,
	};
};

export const decrementBreak = () => {
	return {
		type: 'DECREMENT_BREAK',
		payload: false,
	};
};
