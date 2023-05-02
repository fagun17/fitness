import React from 'react'
import { Button, Image, ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { Image } from 'react-native-web'
import { Header, Icon } from '@rneui/themed';
import IconButton from '../src/components/IconButton';


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
	// <SafeAreaProvider>
		<View>
			<ImageBackground source={image} resizeMode='cover' style={styles.img}>
				<SafeAreaProvider>
					<Header
						rightComponent={
							<TouchableOpacity
							  style={{ marginLeft: 10 }}
							  onPress={() => {}}
							>
								<Image source={{uri: require('../assets/burger.png'), width: 30, height: 30}} />
							  {/* <Icon  name="description" color="white" /> */}
							</TouchableOpacity>
						}
					/>
				</SafeAreaProvider>
				{/* <View style={styles.BurgerWrapper}>
					<IconButton src={'https://fitnessprogramer.com/wp-content/uploads/2022/06/Dumbbell-Single-Arm-Lateral-Raise.gif'}></IconButton>
				</View> */}
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
	// </SafeAreaProvider>
	)
}

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
	BurgerWrapper: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end'
	}
})

export default MainScreen
