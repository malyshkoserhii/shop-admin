export const NUMBER_LETTERS_UNDERSCORE = /^\w+$/;
export const PASSWORD =
	/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/;
export const JUST_LETTERS = /^[a-zA-Z]+$/;
export const PHONE_NUMBER = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
export const GREATER_THAN_ZERO = /^[1-9][0-9]*$/;
export const EMAIL =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
