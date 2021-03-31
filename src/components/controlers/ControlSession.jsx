import { useDispatch } from 'react-redux';
import { incrementSession, decrementSession } from '../../actions/index';
const ControlSession = ({ counter }) => {
	const dispatch = useDispatch();
	return (
		<div>
			<h3>{counter}</h3>
			<button onClick={() => dispatch(incrementSession({ type: 'INCREMENT' }))}>
				Increment
			</button>
			<button onClick={() => dispatch(decrementSession())}>Decrement</button>
		</div>
	);
};

export default ControlSession;
