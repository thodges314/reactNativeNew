import React from 'react';
import {Text, StyleSheet, View} from 'react-native'

const ComponentsScreen = () => {
	const yourname = 'Thomas'
	return (
		<View>
			<Text style={styles.textLineOneStyle}>Getting started with react native!</Text>
			<Text style={styles.textLineTwoStyle}>My name is {yourname}.</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	textLineOneStyle: {
		fontSize: 45
	},
	textLineTwoStyle: {
		fontSize: 20
	}
})

export default ComponentsScreen