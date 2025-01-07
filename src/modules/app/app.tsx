import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

import { RootNavigator } from '../navigation/components/root-navigator';
import { useRefreshToken } from '../../shared/hooks';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
		},
	},
});

export const App = () => {
	useRefreshToken();

	return (
		<QueryClientProvider client={queryClient}>
			<SafeAreaProvider>
				<RootNavigator />
				<Toast position="top" bottomOffset={20} />
			</SafeAreaProvider>
		</QueryClientProvider>
	);
};
