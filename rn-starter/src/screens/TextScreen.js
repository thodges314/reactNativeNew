import React, {useState}  from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

const TextScreen = () => {
	const [name, setName] = useState('')
	console.log(name)
 	return (
		<View>
			<Text>Enter name:</Text>
			<TextInput
				style={styles.input}
				autoCapitalize='none'
				autoCorrect={false}
				value={name}
				onChangeText={value => setName(value)}
			/>
			<Text>My name is: {name}.</Text>
			{(name.length < 5) ? <Text>Your name is too short</Text> : null}
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1
	}
})

export default TextScreen