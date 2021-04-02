import { useDispatch } from 'react-redux';

const Control = ({ counter, controllerType }) => {
	const dispatch = useDispatch();

	const controller = controllerType === 'session';

	return (
		<>
			<button
				id={controller ? 'session-increment' : 'break-increment'}
				onClick={() =>
					dispatch(
						controller
							? { type: 'INCREMENT_SESSION' }
							: { type: 'INCREMENT_BREAK' }
					)
				}>
				Increment
			</button>
			<span>{counter}</span>
			<button
				id={controller ? 'session-decrement' : 'break-decrement'}
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
