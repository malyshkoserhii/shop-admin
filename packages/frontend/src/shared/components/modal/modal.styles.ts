import { css } from '@emotion/css';
import { COLORS } from '~shared/styles';
import { FONT_FAMILIES } from '~shared/styles/fonts';

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

export const modalTitle = css`
	font-family: ${FONT_FAMILIES.poppins_semi_bold};
	font-size: 24px;
	line-height: 36px;
	text-align: center;
	margin-bottom: 40px;
`;

export const modalFooter = css`
	font-family: ${FONT_FAMILIES.poppins_semi_bold};
	font-size: 24px;
	line-height: 36px;
	text-align: center;
	margin-bottom: 40px;
`;

export const negativeBtn = css`
	background-color: ${COLORS.begonia};
	margin-right: 40px;
`;
