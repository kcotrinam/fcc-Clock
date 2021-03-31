import { useDispatch } from 'react-redux';
import { incrementBreak, decrementBreak } from '../../actions/index';

const ControlBreak = ({ counter }) => {
	const dispatch = useDispatch();
	return (
		<div>
			<h3>{counter}</h3>
			<button
				onClick={() => dispatch(incrementBreak({ type: 'INCREMENT_BREAK' }))}>
				Increment
			</button>
			<button onClick={() => dispatch(decrementBreak())}>Decrement</button>
		</div>
	);
};

export default ControlBreak;
