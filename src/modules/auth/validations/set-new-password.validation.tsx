import * as Yup from 'yup';

import { PASSWORD } from '../../../shared/regex';

export const setNewPwdFormSchema = Yup.object().shape({
	password: Yup.string()
		.min(8, 'Your password must be at least 8 characters long')
		.matches(PASSWORD, 'Incorrect password')
		.required('Required'),
	confirm_password: Yup.string()
		.min(8, 'Your password must be at least 8 characters long')
		.oneOf([Yup.ref('password')], 'Passwords must match')
		.required('Required'),
});
