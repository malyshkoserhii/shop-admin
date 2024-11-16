import * as React from 'react';
import { Dialog, DialogBody } from '@blueprintjs/core';

import Cross from '../../../assets/icons/cross.svg';
import {
	crossBtn,
	modalFooter,
	modalHeader,
	modalTitle,
	negativeBtn,
} from './modal.styles';
import { Button } from '../button';

type ModalProps = {
	isOpen: boolean;
	children: React.ReactNode;
	positiveActionBtnTxt: string;
	negativeActionBtnTxt: string;
	positiveActionCb: () => void;
	negativeActionCb: () => void;
	toggleOpen: () => void;
};

export const Modal: React.FunctionComponent<ModalProps> = ({
	children,
	isOpen,
	positiveActionBtnTxt,
	negativeActionBtnTxt,
	positiveActionCb,
	negativeActionCb,
	toggleOpen,
}) => {
	return (
		<Dialog isOpen={isOpen}>
			<DialogBody>
				<div className={modalHeader}>
					<button className={crossBtn} onClick={toggleOpen}>
						<Cross />
					</button>
				</div>
				<h2 className={modalTitle}>Add Product</h2>
				<div>{children}</div>

				<div className={modalFooter}>
					<Button
						text={negativeActionBtnTxt}
						intent="danger"
						onClick={positiveActionCb}
						extraBtnStyles={negativeBtn}
					/>
					<Button
						text={positiveActionBtnTxt}
						onClick={negativeActionCb}
					/>
				</div>
			</DialogBody>
		</Dialog>
	);
};
