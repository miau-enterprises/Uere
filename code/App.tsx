import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homeScreen';
import LoginScreen from './src/screens/loginScreen';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './src/config/firebase';
import Navigation from './Navigation';

function App() {

	const [isSignedIn, setIsSignedIn] = useState<User | null >(null);

	useEffect(() => {
		onAuthStateChanged(FIREBASE_AUTH, (user) => {
			console.log('user', user);
			setIsSignedIn(user);
		});
	}, []);

  return (
	<Navigation />
  );
}

export default App;