import { useVideoConfig } from "remotion";

export const MyComposition = () => {
	const { fps, durationInFrames, width, height } = useVideoConfig();
	return (
		<div
				style={{
					flex: 1,
					textAlign: 'center',
					fontSize: '7em',
					background: 'black',
					color: 'green',
				}}
				>
			Hewwo! 
			This video is {durationInFrames/fps} seconds long
			It is {width} x {height}
		</div>
	)
};
