import * as React from 'react';
import { Dialog, DialogBody } from '@blueprintjs/core';

import Cross from '../../../assets/icons/cross.svg';
import { crossBtn, dialog, modalHeader, modalTitle } from './modal.styles';

type ModalProps = {
	isOpen: boolean;
	children: React.ReactNode;
	toggleOpen: () => void;
};

export const Modal: React.FunctionComponent<ModalProps> = ({
	children,
	isOpen,
	toggleOpen,
}) => {
	return (
		<Dialog isOpen={isOpen} className={dialog}>
			<DialogBody>
				<div className={modalHeader}>
					<button className={crossBtn} onClick={toggleOpen}>
						<Cross />
					</button>
				</div>
				<h2 className={modalTitle}>Add Product</h2>
				<div>{children}</div>
			</DialogBody>
		</Dialog>
	);
};
