import * as React from 'react';
import { Dialog, DialogBody } from '@blueprintjs/core';

import Cross from '../../../assets/icons/cross.svg';
import { crossBtn, dialog, modalHeader } from './modal.styles';

type ModalProps = {
	isOpen: boolean;
	children: React.ReactNode;
	toggleModal: () => void;
};

export const Modal: React.FunctionComponent<ModalProps> = ({
	children,
	isOpen,
	toggleModal,
}) => {
	return (
		<Dialog isOpen={isOpen} className={dialog}>
			<DialogBody>
				<div className={modalHeader}>
					<button className={crossBtn} onClick={toggleModal}>
						<Cross />
					</button>
				</div>

				<div>{children}</div>
			</DialogBody>
		</Dialog>
	);
};
