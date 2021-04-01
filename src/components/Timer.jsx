import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Timer = () => {
	const sessionTime = useSelector((state) => state.timeReducer.session);
	const [timer, setTimer] = useState(sessionTime);
	useEffect(() => {
		setTimer(sessionTime);
	}, [sessionTime]);

	useEffect(() => {
		const btn = document.querySelector('.play');
		btn.addEventListener('click', (e) => {
			console.log(e.target);
			startCountDown();
		});

		const startCountDown = () => {
			setInterval(() => {
				setTimer((prev) => prev - 1);
			}, 1000);
		};
	}, []);

	const changeTimer = (min, sec) => {
		setTimer({
			minutes: `${min}`,
			seconds: `${sec}`,
		});
	};

	return (
		<div className='timer'>
			<h2>
				{timer} : {timer.seconds}
			</h2>
		</div>
	);
};

export default Timer;
