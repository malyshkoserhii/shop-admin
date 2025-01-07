import * as Yup from 'yup';

import { EMAIL } from '../../../shared/regex';

export const forgotPwdFormSchema = Yup.object().shape({
	email: Yup.string()
		.email('Please enter a valid email')
		.required('Required')
		.matches(EMAIL, 'Please enter a valid email'),
});
