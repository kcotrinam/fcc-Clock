import React from 'react';
import { useSelector } from 'react-redux';
import Timer from './Timer';
import MainTitle from './MainTitle';
import Control from './controlers/Control';
import Title from './Title';
import Audio from './Audio';
import '../scss/base/reset.scss';
import '../scss/base/variables.scss';
import '../scss/layout/layout.scss';
import '../scss/components/controllers.scss';
import '../scss/components/button.scss';
import '../scss/components/timer.scss';

const App = () => {
	const counter = useSelector((state) => state.timeReducer.session);
	const breakCounter = useSelector((state) => state.timeReducer.break);

	return (
		<div>
			<MainTitle text='25 + 5 Clock' />
			<div className='controllers'>
				<div className='controllers__session'>
					<Title title='Session Length' id='session-label' />
					<Control counter={counter} controllerType='session' />
				</div>
				<div className='controllers__break'>
					<Title title='Break Length' id='break-label' />
					<Control counter={breakCounter} controllerType='break' />
				</div>
			</div>
			<div className='timer-container'>
				<Title title='Session' />
				<Timer currentTime={counter} />
			</div>
			<Audio
				id='beep'
				audio='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
			/>
			<div></div>
		</div>
	);
};

export default App;
