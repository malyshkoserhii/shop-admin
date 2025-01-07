import * as React from 'react';
import Svg, { Circle, Path, Rect, SvgProps } from 'react-native-svg';

export default function SettingsIcon(props: SvgProps) {
	return (
		<Svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#000000"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<Path d="M20 7h-9" />
			<Path d="M14 17H5" />
			<Circle cx="17" cy="17" r="3" />
			<Circle cx="7" cy="7" r="3" />
		</Svg>
	);
}
