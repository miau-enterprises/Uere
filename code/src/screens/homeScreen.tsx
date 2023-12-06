import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../config/firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

	const navigation = useNavigation();

	const handleLogOut = () => {
		FIREBASE_AUTH.signOut();
		navigation.navigate("Login" as never);
	};

  return (
	<View>
	  <Text>homeScreen</Text>
	  <Button onPress={() => handleLogOut()} title="Log Out" />
	</View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})