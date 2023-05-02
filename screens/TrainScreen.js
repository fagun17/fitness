import React from 'react'
import {
	Image,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler';

import Screen from '../src/components/Screen'
import ScreenManager from '../src/components/ScreenManager'
import TrainBlockScreen from './TrainBlockScreen'

const trainBlocks = [
	{
		exercises: [
			{
				image:
					'https://fitnessprogramer.com/wp-content/uploads/2022/06/Dumbbell-Single-Arm-Lateral-Raise.gif',
				header: 'Arm raises',
				description: 'x10',
			},
		],
	},
	{
		image:
			'http://media.muskuli.com/data/uploads/editor/images/4a1cad750c3d1c7978aa7d8538a2f464.jpg',
	},

	{
		image:
			'https://avatars.mds.yandex.net/i?id=f702d8315f5955e3680d5fea83562e47-4571652-images-thumbs&ref=rim&n=33&w=385&h=300',
	},
	{
		image:
			'https://yoga-in-greece.ru/wp-content/uploads/f/5/b/f5b8d3fc334ad69ae940f18f08f7d4b3.jpeg',
	},
	{
		image:
			'https://sportishka.com/uploads/posts/2022-11/1667430271_25-sportishka-com-p-funktsionalno-silovaya-trenirovka-pinteres-25.jpg',
	},
]

const TrainScreen = () => {
	const [state, setState] = React.useState({
		activeScreenId: 'main',
		activeTrainBlock: null,
	})

	const openScreen = (activeScreenId, addProps = {}) => {
		setState({ ...state, ...addProps, activeScreenId })
	}

	return (
		<ScreenManager activeId={state.activeScreenId}>
			<Screen id='main'>
				<SafeAreaView>
					<View
						style={{
							backgroundColor: '#20B2AA',
							padding: 15,
							height: 200,
							width: '100%',
						}}
					>
						<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
							МОИ ТРЕНИРОВКИ
						</Text>

						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
								marginTop: 20,
							}}
						>
							<View>
								<Text
									style={{
										textAlign: 'center',
										fontWeight: 'bold',
										color: 'white',
										fontSize: 18,
									}}
								>
									0
								</Text>
								<Text style={{ color: '#D0D0D0', fontSize: 17, marginTop: 6 }}>
									ТРЕНИРОВКИ
								</Text>
							</View>

							<View>
								<Text
									style={{
										textAlign: 'center',
										fontWeight: 'bold',
										color: 'white',
										fontSize: 18,
									}}
								>
									0
								</Text>
								<Text style={{ color: '#D0D0D0', fontSize: 17, marginTop: 6 }}>
									КАЛОРИИ
								</Text>
							</View>

							<View>
								<Text
									style={{
										textAlign: 'center',
										fontWeight: 'bold',
										color: 'white',
										fontSize: 18,
									}}
								>
									0
								</Text>
								<Text style={{ color: '#D0D0D0', fontSize: 17, marginTop: 6 }}>
									МИНУТЫ
								</Text>
							</View>
						</View>

						<View style={{ justifyContent: 'center', alignItems: 'center' }}>
							{trainBlocks.map((block, id) => (

							<View
								key={id}
								style={{
									width: '100%',
									height: 120,
									marginTop: 20,
									marginBottom: id == trainBlocks.length - 1 ? 20 : 0,
									borderRadius: 7,
								}}>
								<TouchableOpacity
									onPress={() => {
										openScreen('train-block', { activeTrainBlock: block })
									}}
								>
									<Image
										style={{
											width: '100%',
											height: 120,
											alignItems: 'center',
											//marginBottom: id == trainBlocks.//length - 1 ? 20 : 0,
											borderRadius: 7,
										}}
										source={{
											uri: block.image,
										}}
									/>
								</TouchableOpacity>
							</View>
							))}
						</View>
					</View>
				</SafeAreaView>
			</Screen>

			<Screen id='train-block'>
				<TrainBlockScreen trainBlock={state.activeTrainBlock} />
			</Screen>
		</ScreenManager>
	)
}
export default TrainScreen
const styles = StyleSheet.create({})
