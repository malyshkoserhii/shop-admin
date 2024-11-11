import { css } from '@emotion/css';
import { FONT_FAMILIES } from '~shared/styles/fonts';

export const footer = css`
	width: 100%;
	height: 50px;
	padding: 30px 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const text = css`
	font-family: ${FONT_FAMILIES.poppins_medium};
	font-size: 14px;
`;
