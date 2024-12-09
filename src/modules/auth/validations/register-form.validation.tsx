import * as Yup from 'yup';

import { PASSWORD, PHONE_NUMBER } from '../../../shared/regex';

export const registerFormSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	full_name: Yup.string()
		.required('Required')
		.max(30, '30 chars max')
		.min(2, '2 chars min'),
	phone_number: Yup.string()
		.required('Required')
		.typeError('Invalid phone number')
		.matches(
			PHONE_NUMBER,
			"Phone number should start with ' + ' and include only digits",
		)
		.max(15, 'Max 15 symbols'),
	shipping_address: Yup.string()
		.required('required')
		.max(50, '50 chars max')
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
