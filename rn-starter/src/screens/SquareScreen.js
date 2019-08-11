import React, {useState} from 'react'
import {View, StyleSheet, Button, Text} from 'react-native'
import ColourCounter from '../components/ColourCounter'

const COLOUR_INCREMENT = 5

const SquareScreen = () => {
	const [red, setRed] = useState(0)
	const [green, setGreen] = useState(0)
	const [blue, setBlue] = useState(0)

	const formatColour = () => `rgb(${red}, ${green}, ${blue})`

	const setColour = (colour, change) => {
		switch(colour){
			case 'red':
				(red + change <= 255 && red + change >= 0) && setRed(red + change)
				return
			case 'green':
				(green + change <= 255 && green + change >= 0) && setGreen(green + change)
				return
			case 'blue':
				(blue + change <= 255 && blue + change >= 0) && setBlue(blue + change)
				return
			default: 
				return
		}
	}

	return (
		<View>
			<ColourCounter
				colour='Red'
				onIncrease={()=>setColour('red', COLOUR_INCREMENT)}
				onDecrease={()=>setColour('red', -COLOUR_INCREMENT)}
				value={red}
			/>
			<ColourCounter
				colour='Green'
				onIncrease={()=>setColour('green', COLOUR_INCREMENT)}
				onDecrease={()=>setColour('green', -COLOUR_INCREMENT)}
				value={green}
			/>
			<ColourCounter
				colour='Blue'
				onIncrease={()=>setColour('blue', COLOUR_INCREMENT)}
				onDecrease={()=>setColour('blue', -COLOUR_INCREMENT)}
				value={blue}
			/>
			<Text>{formatColour()}</Text>
			<View style={{height: 150, width: 150, backgroundColor: formatColour() }} />
		</View>
	)
}

const styles = StyleSheet.create({})

export default SquareScreen
