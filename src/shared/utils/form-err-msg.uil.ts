import { TEXT } from '../constants';

export const formErrMsg = (serverErrorMsg: string | undefined) => {
	return serverErrorMsg ?? TEXT.DEFAULT_ERROR;
};
