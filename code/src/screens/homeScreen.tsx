import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../config/firebase'

const HomeScreen = () => {
  return (
	<View>
	  <Text>homeScreen</Text>
	  <Button onPress={() => FIREBASE_AUTH.signOut()} title="Log Out" />
	</View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})