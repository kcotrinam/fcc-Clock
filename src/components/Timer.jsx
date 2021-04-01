import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

const Timer = () => {
	const sessionTime = useSelector((state) => state.timeReducer.session);
	const [timer, setTimer] = useState(sessionTime * 60);
	const [isActive, setIsActive] = useState(false);
	const countRef = useRef(null);

	useEffect(() => {
		if (!isActive) setTimer(sessionTime * 60);
	}, [sessionTime]);

	const handleStart = () => {
		if (isActive) {
			clearInterval(countRef.current);
			setIsActive(false);
		} else if (timer > 1) {
			setIsActive(true);
			countRef.current = setInterval(() => {
				setTimer((timer) => timer - 1);
			}, 1000);
		}
	};

	useEffect(() => {
		const audio = document.querySelector('#beep');

		if (timer < 1) {
			clearInterval(countRef.current);
			setIsActive(false);
			audio.play();
		}
	}, [timer]);

	const formatTime = () => {
		const getSeconds = `0${timer % 60}`.slice(-2);
		const minutes = `${Math.floor(timer / 60)}`;
		const getMinutes = `0${minutes % 60}`.slice(-2);

		return `${getMinutes} : ${getSeconds}`;
	};

	return (
		<div className='timer'>
			<h2>{formatTime()}</h2>
			<button className='play' onClick={handleStart}>
				{isActive ? 'Pause' : 'Play'}
			</button>
		</div>
	);
};

export default Timer;
