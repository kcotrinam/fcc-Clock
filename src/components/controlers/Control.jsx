import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

const Control = ({ counter, controllerType }) => {
	const dispatch = useDispatch();

	const controller = controllerType === 'session';

	return (
		<div>
			<button
				id={controller ? 'session-increment' : 'break-increment'}
				onClick={() =>
					dispatch(
						controller
							? { type: 'INCREMENT_SESSION' }
							: { type: 'INCREMENT_BREAK' }
					)
				}>
				<BsChevronUp />
			</button>
			<span id={controller ? 'session-length' : 'break-length'}>{counter}</span>
			<button
				id={controller ? 'session-decrement' : 'break-decrement'}
				onClick={() =>
					dispatch(
						controller
							? { type: 'DECREMENT_SESSION' }
							: { type: 'DECREMENT_BREAK' }
					)
				}>
				<BsChevronDown />
			</button>
		</div>
	);
};

export default Control;
