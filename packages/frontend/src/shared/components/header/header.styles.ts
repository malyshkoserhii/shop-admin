import { css } from '@emotion/css';
import { COLORS } from '~shared/styles';
import { fontStyleRegular } from '~shared/styles/default-styles';

export const header = css`
	width: 100%;
	padding: 25px 40px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 90px;
`;

export const logo = css`
	width: 308px;
	height: 58px;
`;

export const nav = css`
	width: 200px;
	display: flex;

	align-items: center;
	justify-content: space-between;
`;

export const inactiveLink = css`
	${fontStyleRegular}
	line-height: 18px;
	:hover {
		text-decoration: none;
	}
	:focus {
		outline: 2px solid ${COLORS.blueberry};
	}
`;

export const activeLink = css`
	${fontStyleRegular}
	line-height: 18px;
	color: ${COLORS.blueberry};
	outline: none;
	:hover {
		color: ${COLORS.blueberry};
		text-decoration: none;
	}
	:focus {
		outline: 2px solid ${COLORS.blueberry};
	}
`;

export const logoutBtn = css`
	${fontStyleRegular}

	line-height: 18px;
	background-color: transparent;
	border: none;
	outline: none;

	cursor: pointer;

	:focus {
		outline: 2px solid ${COLORS.blueberry} !important;
	}
`;
