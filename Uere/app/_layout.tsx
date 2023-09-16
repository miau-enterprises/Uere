import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { Slot, useSegments, useRouter } from 'expo-router';
import React from 'react';

const CLERK_PUBLISHABLE_KEY='pk_test_aW50ZXJuYWwtc3BvbmdlLTM1LmNsZXJrLmFjY291bnRzLmRldiQ'

const tokenCache = {
	async getToken(key: string) {
		try {
			return SecureStore.getItemAsync(key);
		} catch (err) {
			return null;
		}
	},
	async saveToken(key: string, token: string) {
		try {
			return SecureStore.setItemAsync(key, token);
		} catch (err) {
			return;
		}
	}
}

const InitialLayout = () => {

	const { isLoaded, isSignedIn } = useAuth();
	const segments = useSegments();
	const router = useRouter();

	//whenever isSignedIn changes, this hook is runned
	useEffect(() => {
	if (!isLoaded) return;
		console.log('isSignedIn', isSignedIn);

		const inTabsGroup = segments[0] == '(auth)';

		if (isSignedIn && !inTabsGroup) {
			router.replace('/home');
		} else if (!isSignedIn) {
			router.replace('/login');
		}

	}, [isSignedIn]);


	return <Slot />;
}

const RootLayoutNav = () => {
  return (
	<ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
		<InitialLayout />
	</ClerkProvider>
  );
}

export default RootLayoutNav;