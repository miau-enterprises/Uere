import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './src/config/firebase';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/homeScreen';
import LoginScreen from './src/screens/loginScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {

	const [isSignedIn, setIsSignedIn] = useState<User | null >(null);

	useEffect(() => {
		onAuthStateChanged(FIREBASE_AUTH, (user) => {
			console.log('user', user);
			setIsSignedIn(user);
		});
	}, []);


	// {isSignedIn ? (	
	// 	<Stack.Screen name="Home" options={{headerShown:true}} component={HomeScreen} />
	// 	) : (
	// 		<Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
	// )}

  return (
	<NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
		<Stack.Screen name="Register" options={{headerShown:true}} component={RegisterScreen} />
		<Stack.Screen name="Home" options={{headerShown:true}} component={HomeScreen} />
		<Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation