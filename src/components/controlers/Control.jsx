import { useDispatch } from 'react-redux';
const Control = ({ counter, controllerType }) => {
	const dispatch = useDispatch();
	const controller = controllerType === 'session';
	return (
		<>
			<h3>{counter}</h3>
			<button
				onClick={() =>
					dispatch(
						controller
							? { type: 'INCREMENT_SESSION' }
							: { type: 'INCREMENT_BREAK' }
					)
				}>
				Increment
			</button>
			<button
				onClick={() =>
					dispatch(
						controller
							? { type: 'DECREMENT_SESSION' }
							: { type: 'DECREMENT_BREAK' }
					)
				}>
				Decrement
			</button>
		</>
	);
};

export default Control;
