import React, {useReducer} from 'react'
import {View, StyleSheet, Button, Text} from 'react-native'
import ColourCounter from '../components/ColourCounter'

const COLOUR_INCREMENT = 5

const setColour = (value, change) => (value + change <= 255 && value + change >= 0) ? value + change : 0

const reducer = (state, action) =>{
	switch (action.colourToChange){
		case 'red':
			return {...state, red: setColour(state.red, action.amount)}
		case 'green':
			return {...state, green: setColour(state.green, action.amount)}
		case 'blue':
			return {...state, blue: setColour(state.blue, action.amount)}
		default:
			state
	}
}

const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
	const {red, green, blue} = state
	const formatColour = () => `rgb(${red}, ${green}, ${blue})`

	return (
		<View>
			<ColourCounter
				colour='Red'
				onIncrease={()=>dispatch({colourToChange: 'red', amount: COLOUR_INCREMENT}) }
				onDecrease={()=>dispatch({colourToChange: 'red', amount: -COLOUR_INCREMENT}) }
				value={red}
			/>
			<ColourCounter
				colour='Green'
				onIncrease={()=>dispatch({colourToChange: 'green', amount: COLOUR_INCREMENT}) }
				onDecrease={()=>dispatch({colourToChange: 'green', amount: -COLOUR_INCREMENT}) }
				value={green}
			/>
			<ColourCounter
				colour='Blue'
				onIncrease={()=>dispatch({colourToChange: 'blue', amount: COLOUR_INCREMENT}) }
				onDecrease={()=>dispatch({colourToChange: 'blue', amount: -COLOUR_INCREMENT}) }
				value={blue}
			/>
			<Text>{formatColour()}</Text>
			<View style={{height: 150, width: 150, backgroundColor: formatColour(red, green, blue) }} />
		</View>
	)
}

const styles = StyleSheet.create({})

export default SquareScreen
