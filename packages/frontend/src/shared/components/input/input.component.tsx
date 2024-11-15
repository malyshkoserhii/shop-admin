import React from 'react';
import { ComponentPropsWithoutRef } from 'react';
import {
	Controller,
	ControllerProps,
	FieldPath,
	FieldValues,
} from 'react-hook-form';

import {
	errorMessage,
	input,
	inputSection,
	inputWithError,
	labelStyles,
} from './input.styles';
import classNames from 'classnames';

type TextInputProps = {
	label: string;
	extraInputSectionStyles?: string;
	extraInputStyles?: string;
};

type InputProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Pick<ControllerProps<TFieldValues, TName>, 'name' | 'control' | 'rules'> &
	ComponentPropsWithoutRef<'input'> &
	TextInputProps;

export function Input<
	T extends FieldValues = FieldValues,
	U extends FieldPath<T> = FieldPath<T>,
>({
	name,
	control,
	rules,
	onChange,
	onBlur,
	label,
	extraInputSectionStyles,
	extraInputStyles,
	...rest
}: InputProps<T, U>): React.ReactNode {
	return (
		<Controller
			name={name}
			rules={rules}
			control={control}
			render={({ field, fieldState }) => (
				<section
					className={classNames(
						inputSection,
						extraInputSectionStyles,
					)}
				>
					<label className={labelStyles}>{label}</label>
					<input
						{...rest}
						{...field}
						onBlur={(e) => {
							field.onBlur();
							onBlur?.(e);
						}}
						onChange={(e) => {
							field.onChange(e);
							onChange?.(e);
						}}
						className={classNames(input, extraInputStyles, {
							[inputWithError]: Boolean(
								fieldState?.error?.message,
							),
						})}
					/>
					{fieldState.error && fieldState.error.message && (
						<p className={errorMessage}>
							{fieldState.error.message}
						</p>
					)}
				</section>
			)}
		/>
	);
}
