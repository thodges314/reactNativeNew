import React from 'react'
import {View, StyleSheet, Button, Text} from 'react-native'

const ColourCounter = ({colour, onIncrease, onDecrease, value}) => {
	return (
		<View>
			<Text>{colour}</Text>
			<Button title={`Increase ${colour}`} onPress={()=>onIncrease()} disabled={value >= 255}/>
			<Button title={`Decrease ${colour}`} onPress={()=>onDecrease()} disabled={value <= 0}/>
		</View>
	)
}

const styles = StyleSheet.create({})

export default ColourCounter
