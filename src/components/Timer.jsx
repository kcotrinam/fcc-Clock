import { useEffect, useState } from 'react';

const Timer = ({ currentTime }) => {
	const [timer, setTimer] = useState({
		minutes: '0',
		seconds: '00',
	});

	useEffect(() => {
		const min = currentTime % 60;
		const seconds = '00';

		setTimer({
			minutes: `${min}`,
			seconds: `${seconds}`,
		});
	}, [currentTime]);

	return (
		<div className='timer'>
			<h2>
				{timer.minutes} : {timer.seconds}
			</h2>
		</div>
	);
};

export default Timer;
