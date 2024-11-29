import * as React from 'react';
import { Button, MenuItem } from '@blueprintjs/core';
import { ItemRenderer, Select } from '@blueprintjs/select';

import { Options } from '~shared/types';

type AppSelectProps<T> = {
	options: Array<Options<T>>;
	selectedItem: Options<T>;
	onItemSelect: (item: Options<T>) => void;
};

export function AppSelect<T>({
	options,
	selectedItem,
	onItemSelect,
}: AppSelectProps<T>): React.ReactNode {
	const renderItem: ItemRenderer<Options<T>> = (
		option,
		{ handleClick, handleFocus, modifiers },
	) => {
		return (
			<MenuItem
				active={modifiers.active}
				disabled={modifiers.disabled}
				key={option?.option as string}
				onClick={handleClick}
				onFocus={handleFocus}
				roleStructure="listoption"
				text={option?.option as string}
			/>
		);
	};

	return (
		<Select<Options<T>>
			items={options}
			filterable={false}
			itemRenderer={renderItem}
			onItemSelect={onItemSelect}
		>
			<Button
				text={selectedItem?.option as string}
				rightIcon="caret-down"
			/>
		</Select>
	);
}
