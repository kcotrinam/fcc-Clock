import React from 'react';
import { useSelector } from 'react-redux';
import Timer from './Timer';
import MainTitle from './MainTitle';
import Control from './controlers/Control';
import Title from './Title';
import Audio from './Audio';

const App = () => {
	const counter = useSelector((state) => state.timeReducer.session);
	const breakCounter = useSelector((state) => state.timeReducer.break);

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
			<Audio
				id='beep'
				audio='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
			/>
		</div>
	);
};

export default App;
