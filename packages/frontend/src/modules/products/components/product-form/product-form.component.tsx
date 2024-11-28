import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '~shared/components/input';
import {
	btnsBox,
	deleteBtn,
	formStyles,
	formTitle,
	inputSection,
} from './product-form.styles';
import {
	CreateProductPayload,
	CreateProductResponse,
	UpdateProductPayload,
} from '~/services/products/products.types';
import { Button } from '~shared/components/button';

type ProductFormValues = {
	name: string;
	description: string;
	price: string;
	quantity: string;
	category: string;
};

type ProductFormProps = {
	product: CreateProductResponse | null;
	createProduct: (
		payload: CreateProductPayload,
	) => Promise<CreateProductResponse>;
	editProduct: (
		paylaod: UpdateProductPayload,
	) => Promise<CreateProductResponse>;
	removeProduct: (productId: string) => Promise<void>;
};

export const ProductForm: React.FunctionComponent<ProductFormProps> = ({
	product,
	createProduct,
	editProduct,
	removeProduct,
}): React.ReactNode => {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			name: product?.name ?? '',
			description: product?.description ?? '',
			price: product?.price ?? '',
			quantity: product?.stock_quantity ?? '',
			category: product?.category ?? '',
		},
	});

	const onSavePress = async (values: ProductFormValues): Promise<void> => {
		if (product) {
			editProduct({
				id: product.id,
				name: values.name,
				description: values.description,
				price: Number(values.price),
				stock_quantity: Number(values.quantity),
				category: values.category,
			});
			return;
		}
		await createProduct({
			name: values.name,
			description: values.description,
			price: Number(values.price),
			stock_quantity: Number(values.quantity),
			category: values.category,
		});
	};

	const onDeletePress = async (): Promise<void> => {
		await removeProduct(product.id);
	};

	return (
		<form onSubmit={handleSubmit(onSavePress)} className={formStyles}>
			<h2 className={formTitle}>
				{product ? 'Update Product' : 'Add Product'}
			</h2>

			<Input
				control={control}
				name="name"
				rules={{
					required: { value: true, message: 'Required' },
				}}
				label="Name"
				extraInputSectionStyles={inputSection}
			/>

			<Input
				control={control}
				name="description"
				rules={{
					required: { value: true, message: 'Required' },
				}}
				label="Description"
				extraInputSectionStyles={inputSection}
			/>

			<Input
				control={control}
				name="price"
				rules={{
					required: { value: true, message: 'Required' },
				}}
				label="Price"
				extraInputSectionStyles={inputSection}
			/>

			<Input
				control={control}
				name="quantity"
				rules={{
					required: { value: true, message: 'Required' },
				}}
				label="Quantity"
				extraInputSectionStyles={inputSection}
			/>

			<Input
				control={control}
				name="category"
				rules={{
					required: { value: true, message: 'Required' },
				}}
				label="Category"
				extraInputSectionStyles={inputSection}
			/>

			<div className={btnsBox}>
				{product && (
					<Button
						text="Delete"
						intent="danger"
						onClick={onDeletePress}
						extraBtnStyles={deleteBtn}
					/>
				)}
				<Button text="Save" props={{ type: 'submit' }} />
			</div>
		</form>
	);
};
