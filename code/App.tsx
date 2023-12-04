import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homeScreen';
import LoginScreen from './src/screens/loginScreen';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './src/config/firebase';


const Stack = createNativeStackNavigator();


function App() {

	const [isSignedIn, setIsSignedIn] = useState<User | null >(null);

	useEffect(() => {
		onAuthStateChanged(FIREBASE_AUTH, (user) => {
			console.log('user', user);
			setIsSignedIn(user);
		});
	}, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
		{isSignedIn ? (	
        <Stack.Screen name="Home" options={{headerShown:true}} component={HomeScreen} />
		) : (
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
		)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;