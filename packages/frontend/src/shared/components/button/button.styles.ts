import { css } from '@emotion/css';

import { COLORS } from '../../styles';
import { FONT_FAMILIES } from '~shared/styles/fonts';

export const btnStyles = css`
	width: 120px !important;
	padding: 10px 0 !important;
	font-size: 14px !important;
	font-family: ${FONT_FAMILIES.poppins_regular} !important;
	color: ${COLORS.white} !important;
	border-radius: 10px !important;
	box-shadow: none !important;

	:focus {
		outline: 1px solid ${COLORS.black} !important;
	}
`;
