import React, {useState} from 'react'
import {View, StyleSheet, Button, FlatList} from 'react-native'

const ColourScreen = () => {
	const [colours, setColours] = useState([])
	return (
		<View>
			<Button title='Add a Colour' onPress={()=> {setColours([...colours, randomRgb()])}}/>
			<FlatList
				data={colours}
				renderItem = {({item}) => <View style={{height: 100, width: '100%', backgroundColor: item}} />}
				keyExtractor = {color => color}
				/>
		</View>
	)
}

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256)
	const green = Math.floor(Math.random() * 256)
	const blue = Math.floor(Math.random() * 256)
	return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({})

export default ColourScreen