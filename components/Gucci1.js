import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Gucci() {
	return (
		<View style={styles.main}>
			<Text style={styles.text}>ПАРАМЕТРЫ</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	main: {
		paddingTop: 100,
		height: 100,
		backgroundColor: '#FFFFFF',
	},
	text: {
		fontSize: 18,
		color: 'black',
		textAlign: 'center',
	},
})
