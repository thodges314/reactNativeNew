import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<View style={styles.textOneStyle}></View>
			<View style={styles.textTwoStyle}></View>
			<View style={styles.textThreeStyle}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	viewStyle: {
		// borderWidth: 3,
		// borderColor: 'black',
		height: 200,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start'
	},
	textOneStyle:{
		borderWidth: 3,
		borderColor: 'red',
		backgroundColor: 'red',
		height: 100,
		width: 100
	},
	textTwoStyle:{
		borderWidth: 3,
		borderColor: 'green',
		backgroundColor: 'green',
		height: 100,
		width: 100,
		alignSelf: "flex-end"
		// top: 20
		// marginTop: 100
	},
	textThreeStyle:{
		borderWidth: 3,
		borderColor: 'purple',
		backgroundColor: 'purple',
		height: 100,
		width: 100
	}
})

export default BoxScreen