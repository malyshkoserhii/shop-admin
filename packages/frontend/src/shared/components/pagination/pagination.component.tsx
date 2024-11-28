import * as React from 'react';
import ReactPaginate from 'react-paginate';

import { container, paginationWrapper } from './pagination.styles';

type PaginationProps = {
	onPageChange: (selectedItem: { selected: number }) => void;
	totalPages: number;
	forcePage: number;
};

export const Pagination: React.FunctionComponent<PaginationProps> = ({
	onPageChange,
	totalPages,
	forcePage,
}) => {
	return totalPages > 1 ? (
		<div className={paginationWrapper}>
			<ReactPaginate
				className={container}
				breakLabel="..."
				nextLabel=">"
				onPageChange={onPageChange}
				pageRangeDisplayed={1}
				pageCount={totalPages}
				previousLabel="<"
				renderOnZeroPageCount={null}
				forcePage={forcePage}
			/>
		</div>
	) : null;
};
