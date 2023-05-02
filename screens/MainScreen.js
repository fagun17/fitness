import React from 'react'
import { Button, ImageBackground, StyleSheet, View } from 'react-native'
//import { Image } from 'react-native-web'

const styles = StyleSheet.create({
	img: {
		height: 900,
		weight: 200,
		flex: 1,
		justifyContent: 'center',
	},
	Button: {
		marginVertical: 8,
		borderBottomColor: '#737373',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	imgButton: {
		width: 120,
		height: 53,
		marginTop: 20,
		borderRadius: 10,
	},
	Text: {
		color: '#000000',
		fontSize: 100,
		lineHeight: 100,
		fontWeight: 'bold',
		textAlign: 'center',
		backgroundColor: '#000000',
	},
})

const MainScreen = ({ openScreen }) => {
	const image = {
		uri: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614673799_104-p-fon-dlya-sportivnoi-afishi-116.jpg',
	}

	const App = () => (
		<View style={styles.container}>
			<ImageBackground
				source={image}
				resizeMode='cover'
				style={styles.img}
			></ImageBackground>
		</View>
	)

	return (
		<View>
			<ImageBackground source={image} resizeMode='cover' style={styles.img}>
				<Button
					style={styles.Text}
					title='НАЧАТЬ ТРЕНИРОВКУ'
					color={'#000000'}
				/>
				<Button
					style={styles.Text}
					title='ЗАПИСАТЬСЯ В ЗАЛ'
					color={'#000000'}
				/>
			</ImageBackground>
		</View>
	)
}

export default MainScreen
