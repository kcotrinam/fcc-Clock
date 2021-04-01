const Audio = ({ id, audio }) => (
	<audio id={id} preload='auto' src={audio}></audio>
);

export default Audio;
