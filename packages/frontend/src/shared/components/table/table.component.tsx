import * as React from 'react';
import classNames from 'classnames';

import { btn, headerStyles, rowStyles, tableStyles } from './table.styles';

import Logo from '../../../assets/icons/edit.svg';

type TableProps<T, C> = {
	data: Array<T>;
	columns: Array<C>;
};

export function Table<
	T extends { id: string },
	C extends { field: keyof T; header: string },
>({ data, columns }: TableProps<T, C>): React.ReactNode {
	const onButtonPress = (id: string): void => {
		console.log('🚀 ~ onButtonPress ~ id:', id);
	};
	return (
		<table className={tableStyles}>
			<thead>
				<tr>
					{columns.map((head, idx) => {
						return (
							<th key={idx} className={headerStyles}>
								{head.header}
							</th>
						);
					})}
					<th className={rowStyles}></th>
				</tr>
			</thead>
			<tbody>
				{data.map((row, idx) => {
					return (
						<tr key={idx}>
							{columns.map((col, idx) => {
								return (
									<td key={idx} className={rowStyles}>
										{row[col.field] as string}
									</td>
								);
							})}
							<td
								className={classNames(rowStyles, btn)}
								onClick={() => onButtonPress(row.id)}
							>
								<span>
									<Logo />
								</span>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
