export const incrementSession = () => {
	return {
		type: 'INCREMENT_SESSION',
	};
};

export const decrementSession = () => {
	return {
		type: 'DECREMENT_SESSION',
	};
};

export const incrementBreak = () => {
	return {
		type: 'INCREMENT_BREAK',
	};
};

export const decrementBreak = () => {
	return {
		type: 'DECREMENT_BREAK',
	};
};
