import { css } from '@emotion/css';
import { FONT_FAMILIES } from '~shared/styles/fonts';

export const formStyles = css`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const formTitle = css`
	font-family: ${FONT_FAMILIES.poppins_semi_bold};
	font-size: 24px;
	line-height: 36px;
	text-align: center;
	margin-bottom: 40px;
`;

export const inputSection = css`
	margin-bottom: 40px;
`;

export const btnsBox = css`
	display: flex;
`;

export const deleteBtn = css`
	margin-right: 40px;
`;
