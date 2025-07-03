import React from 'react';

import { useFonts } from 'expo-font';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

import { RootNavigator } from '../navigation/components/root-navigator';
import { useRefreshToken } from '../../shared/hooks';
import { FONTS_LIST } from '../../shared/styles';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
		},
	},
});

export const App = () => {
	const [loaded, error] = useFonts(FONTS_LIST);

	React.useEffect(() => {
		if (loaded || error) {
			//   SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	useRefreshToken();

	if (!loaded && !error) {
		return null;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<SafeAreaProvider>
				<RootNavigator />
				<Toast position="top" bottomOffset={20} />
			</SafeAreaProvider>
		</QueryClientProvider>
	);
};
