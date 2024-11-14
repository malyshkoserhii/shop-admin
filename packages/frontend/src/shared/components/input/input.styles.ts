import { css } from '@emotion/css';
import { COLORS } from '~shared/styles';
import { fontStyleRegular } from '~shared/styles/default-styles';
import { FONT_FAMILIES } from '~shared/styles/fonts';

export const inputSection = css`
	position: relative;
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

export const labelStyles = css`
	${fontStyleRegular}
	margin-bottom: 4px;
`;

export const input = css`
	width: 300px;
	padding: 10px;
	border: 1px solid ${COLORS.taupe_gray};
	border-radius: 10px;
	font-family: ${FONT_FAMILIES.poppins_regular};
	font-size: 14px;
`;

export const inputWithError = css`
	border: solid 1px ${COLORS.begonia};
`;

export const errorMessage = css`
	position: absolute;
	left: 0;
	bottom: -30px;
	font-family: ${FONT_FAMILIES.poppins_regular};
	font-size: 14px;
	color: ${COLORS.begonia};
`;
