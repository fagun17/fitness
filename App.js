import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import MainScreen from './screens/MainScreen'
import ParametrScreen from './screens/ParametrScreen'
import TrainScreen from './screens/TrainScreen'
import Epic from './src/components/Epic'
import Screen from './src/components/Screen'
import ScreenManager from './src/components/ScreenManager'
import Gucci from './components/Gucci'

export default function App() {
	const [state, setState] = React.useState({
		activeScreenId: 'main-screen',
	})

	const openScreen = activeScreenId => {
		setState({ ...state, activeScreenId })
	}

	return (
		<View style={styles.root}>
			<StatusBar style='auto' />

			<ScrollView style={styles.screenContainer}>
				<ScreenManager activeId={state.activeScreenId}>
					<Screen id='main-screen'>
						<MainScreen openScreen={openScreen} />
					</Screen>
					<Screen id='train-screen'>
						<TrainScreen />
					</Screen>
					<Screen id='ParametrScreen'>
						<ParametrScreen />
					</Screen>
				</ScreenManager>
			</ScrollView>

			<Epic
				onClick={btn => openScreen(btn.name)}
				buttons={[
					{
						name: 'ParametrScreen',
						image:
							'https://static.tildacdn.com/tild3635-6662-4735-b039-363065613835/ten.png',
					},
					{
						name: 'main-screen',
						image:
							'https://cdn.icon-icons.com/icons2/1302/PNG/512/webpagehome_85808.png',
					},
					{
						name: 'train-screen',
						image:
							'https://cdn3.iconfinder.com/data/icons/healthy-and-fitness/512/Health-Fitness-Bodybuilding-big-muscle-strong-man-1024.png',
					},
				]}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		height: '100%',
	},
	screenContainer: {
		height: '100%',
	},
	input: {
		borderBottomWidth: 1,
		borderColor: '#000',
		padding: 10,
		marginVertical: 20,
		marginHorizontal: '20%',
		width: '60%',
	},
})
