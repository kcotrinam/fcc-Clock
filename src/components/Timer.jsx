import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Timer = () => {
	const sessionTime = useSelector((state) => state.timeReducer.session);
	const [timer, setTimer] = useState({
		minutes: sessionTime,
		seconds: 0,
		isPlaying: false,
	});
	useEffect(() => {
		if (!timer.isPlaying) {
			setTimer({ minutes: sessionTime, seconds: 0 });
		}
	}, [sessionTime]);

	useEffect(() => {
		const btn = document.querySelector('.play');

		btn.addEventListener('click', () => {
			startCountDown();
		});

		const startCountDown = () => {
			setInterval(() => {
				setTimer((prevState) => ({
					...prevState,
					seconds: prevState.seconds < 1 ? 59 : prevState.seconds - 1,
					minutes:
						prevState.seconds < 1 ? prevState.minutes - 1 : prevState.minutes,
					isPlaying: true,
				}));
			}, 1000);
		};
	}, []);

	return (
		<div className='timer'>
			<h2>
				{timer.minutes} : {timer.seconds}
			</h2>
		</div>
	);
};

export default Timer;
