import { css } from '@emotion/css';

import { COLORS } from '~shared/styles';

export const dialog = css`
	background-color: ${COLORS.white} !important;
`;

export const modalHeader = css`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

export const crossBtn = css`
	outline: none;
	border: none;
	background-color: transparent;
	cursor: pointer;
`;
