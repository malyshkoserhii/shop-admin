import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export default function SignOutIcon(props: SvgProps) {
	return (
		<Svg
			width="24px"
			height="24px"
			viewBox="0 0 24 24"
			fill="none"
			{...props}
		>
			<Path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M20 12h-9.5m7.5 3l3-3-3-3m-5-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2v-1"
			/>
		</Svg>
	);
}
