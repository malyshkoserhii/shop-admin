import { View, Text } from 'react-native';

import { styles } from './product-list-item.styles';
import { Product } from '../../../../shared/types/entities.types';

type ProductListItemProps = {
	product: Product;
};

export const ProductListItem: React.FC<ProductListItemProps> = ({
	product,
}) => (
	<View style={styles.container}>
		<View>
			<Text style={[styles.text, styles.mb]}>{product.name}</Text>

			<View style={styles.textWrapper}>
				<Text style={styles.category}>Category: </Text>
				<Text style={styles.text}>
					{product.category ? product.category : 'Unknown'}
				</Text>
			</View>
		</View>

		<View>
			<View style={styles.textWrapper}>
				<Text style={styles.category}>Price: </Text>
				<Text style={styles.text}>{product.price}</Text>
			</View>
		</View>
	</View>
);
