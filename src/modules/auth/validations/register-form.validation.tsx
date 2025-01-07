import * as Yup from 'yup';

import { PASSWORD } from '../../../shared/regex';

export const registerFormSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	full_name: Yup.string()
		.required('Required')
		.max(30, '30 chars max')
		.min(2, '2 chars min'),
	password: Yup.string()
		.min(8, 'Your password must be at least 8 characters long')
		.matches(PASSWORD, 'Incorrect password')
		.required('Required'),
	confirm_password: Yup.string()
		.min(8, 'Your password must be at least 8 characters long')
		.oneOf([Yup.ref('password')], 'Passwords must match')
		.required('Required'),
});
