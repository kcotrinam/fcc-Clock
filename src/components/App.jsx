import React from 'react';
import { useSelector } from 'react-redux';
import Timer from './Timer';
import MainTitle from './MainTitle';
import Control from './controlers/Control';
import Title from './Title';

const App = () => {
	const counter = useSelector((state) => state.sessionReducer);
	const breakCounter = useSelector((state) => state.breakReducer);

	return (
		<div>
			<MainTitle text='25 + 5 Clock' />
			<div>
				<div>
					<Title title='Session Length' />
					<Control counter={counter} controllerType='session' />
				</div>
				<div>
					<Title title='Break Length' />
					<Control counter={breakCounter} controllerType='break' />
				</div>
			</div>
			<div>
				<Title title='Session' />
				<Timer currentTime={counter} />
			</div>
		</div>
	);
};

export default App;
