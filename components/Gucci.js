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
		paddingTop: 50,
		height: 100,
		backgroundColor: '#20B2AA',
	},
	text: {
		fontSize: 18,
		color: 'black',
		textAlign: 'center',
	},
})
