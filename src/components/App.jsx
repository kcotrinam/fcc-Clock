import React from 'react';
import { useSelector } from 'react-redux';
import Timer from './Timer';
import MainTitle from './MainTitle';
import ControlSession from './controlers/ControlSession';
import ControlBreak from './controlers/ControlBreak';

const App = () => {
	const counter = useSelector((state) => state.sessionReducer);
	const breakCounter = useSelector((state) => state.breakReducer);

	return (
		<div>
			<MainTitle text='25 + 5 Clock' />
			<div>
				<ControlSession counter={counter} />
				<ControlBreak counter={breakCounter} />
			</div>
			<Timer currentTime={counter} />
		</div>
	);
};

export default App;
