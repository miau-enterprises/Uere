import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../config/firebase';
import { PhoneAuthProvider, RecaptchaVerifier, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const auth = FIREBASE_AUTH;
	const navigation = useNavigation();

	const handleSignIn = async () => {
		try {
			const response = signInWithEmailAndPassword(auth, email, password);
			navigation.navigate("Home" as never);
			//alert("User signed in!");
		} catch (error: any) {
			console.error(error);
			alert(error.message);
		}
	};


  return (
	<KeyboardAvoidingView behavior="height" style={styles.container}>
		<View style={styles.inputContainer}>
			<TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Email" autoFocus />
			<TextInput value={password} onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="Password" secureTextEntry />
		</View>
		<View style={styles.buttonContainer}>
			<TouchableOpacity style={styles.button} onPress={() => {handleSignIn()}}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={() => navigation.navigate("Register" as never)}>
				<Text style={styles.buttonOutlineText}>Register</Text>
			</TouchableOpacity>
		</View>
	</KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	  },
	  inputContainer: {
		width: '80%'
	  },
	  input: {
		backgroundColor: 'white',
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 5,
	  },
	  buttonContainer: {
		width: '60%',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 40,
	  },
	  button: {
		backgroundColor: '#0782F9',
		width: '100%',
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
	  },
	  buttonOutline: {
		backgroundColor: 'white',
		marginTop: 5,
		borderColor: '#0782F9',
		borderWidth: 2,
	  },
	  buttonText: {
		color: 'white',
		fontWeight: '700',
		fontSize: 16,
	  },
	  buttonOutlineText: {
		color: '#0782F9',
		fontWeight: '700',
		fontSize: 16,
	  },
})