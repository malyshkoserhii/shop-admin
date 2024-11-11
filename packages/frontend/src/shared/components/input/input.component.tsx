import React from 'react';
import { ComponentPropsWithoutRef } from 'react';
import {
	Controller,
	ControllerProps,
	FieldPath,
	FieldValues,
} from 'react-hook-form';

type TextInputProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Pick<ControllerProps<TFieldValues, TName>, 'name' | 'control' | 'rules'> &
	ComponentPropsWithoutRef<'input'>;

export function Input<
	T extends FieldValues = FieldValues,
	U extends FieldPath<T> = FieldPath<T>,
>({
	name,
	control,
	rules,
	onChange,
	onBlur,
	...rest
}: TextInputProps<T, U>): React.ReactNode {
	return (
		<Controller
			name={name}
			rules={rules}
			control={control}
			render={({ field, fieldState }) => (
				<div>
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
					/>
					{fieldState.error && fieldState.error.message && (
						<div>{fieldState.error.message}</div>
					)}
				</div>
			)}
		/>
	);
}
