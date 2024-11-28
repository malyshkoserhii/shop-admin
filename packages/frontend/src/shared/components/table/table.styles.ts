import { css } from '@emotion/css';
import { COLORS } from '~shared/styles';

import { fontStyleRegular } from '~shared/styles/default-styles';
import { FONT_FAMILIES } from '~shared/styles/fonts';

export const tableStyles = css`
	max-width: 100%;
	width: 958px;
	border-collapse: collapse;

	margin-bottom: 60px;
`;

export const headerStyles = css`
	font-family: ${FONT_FAMILIES.poppins_bold};
	font-size: 14px;
	color: ${COLORS.black};

	text-align: left;
	padding: 10px 10px;

	border-bottom: 1px ${COLORS.black} solid;
`;

export const rowStyles = css`
	${fontStyleRegular}
	text-align: left;
	padding: 10px 10px;

	width: auto;

	max-width: 300px;

	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;

	border-bottom: 1px ${COLORS.black} solid;
`;

export const btn = css`
	width: 30px;
	cursor: pointer;
`;
