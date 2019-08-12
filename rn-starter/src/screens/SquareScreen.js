import React, {useReducer} from 'react'
import {View, StyleSheet, Button, Text} from 'react-native'
import ColourCounter from '../components/ColourCounter'

const COLOUR_INCREMENT = 5

const setColour = (value, change) => (value + change <= 255 && value + change >= 0) ? value + change : value

const reducer = (state, action) =>{
	switch (action.type){
		case 'change_red':
			return {...state, red: setColour(state.red, action.payload)}
		case 'change_green':
			return {...state, green: setColour(state.green, action.payload)}
		case 'change_blue':
			return {...state, blue: setColour(state.blue, action.payload)}
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
				onIncrease={()=>dispatch({type: 'change_red', payload: COLOUR_INCREMENT}) }
				onDecrease={()=>dispatch({type: 'change_red', payload: -COLOUR_INCREMENT}) }
				value={red}
			/>
			<ColourCounter
				colour='Green'
				onIncrease={()=>dispatch({type: 'change_green', payload: COLOUR_INCREMENT}) }
				onDecrease={()=>dispatch({type: 'change_green', payload: -COLOUR_INCREMENT}) }
				value={green}
			/>
			<ColourCounter
				colour='Blue'
				onIncrease={()=>dispatch({type: 'change_blue', payload: COLOUR_INCREMENT}) }
				onDecrease={()=>dispatch({type: 'change_blue', payload: -COLOUR_INCREMENT}) }
				value={blue}
			/>
			<Text>{formatColour()}</Text>
			<View style={{height: 150, width: 150, backgroundColor: formatColour(red, green, blue) }} />
		</View>
	)
}

const styles = StyleSheet.create({})

export default SquareScreen
