import React, { useState } from 'react'
import { Button, Image, StyleSheet, TextInput, View } from 'react-native'
import Gucci from '../components/Gucci'
import { NativeBaseProvider, Select } from 'native-base'

import NumberInput from '../src/components/NumberInput';

export default function Form() {
	const [state, setState] = useState({
		age: null,
		height: null,
		weight: null,
		sex: null
	});

	const onChange = (field, value) => {
		setState({ ...state, [field]: value });
	}

	const getInputHandler = (field) => (value) => onChange(field, value);

	return (
		<View>
			<Gucci />
			<NumberInput 
				style={styles.input}
				onChange={getInputHandler('age')}
				value={state.age}
				placeholder='Введите возраст...'
			/>
			<NumberInput 
				style={styles.input}
				onChange={getInputHandler('height')}
				value={state.height}
				placeholder='Введите рост...'
			/>
			<NumberInput 
				style={styles.input}
				onChange={getInputHandler('weight')}
				value={state.weight}
				placeholder='Введите вес...'
			/>
			<View style={styles.select_wrapper}>
				<Select selectedValue={state.sex} minWidth="200" accessibilityLabel="Укажите пол" placeholder="Укажите пол" _selectedItem={{
						bg: "teal.600",
						// endIcon: <CheckIcon size="5" />
					}} mt={1} onValueChange={getInputHandler('sex')}
				>
					<Select.Item label="мужской" value="male" />
					<Select.Item label="женский" value="female" />
				</Select>
			</View>
			<View style={styles.button_wrapper}>
				<Button color='#20B2AA' title='СОХРАНИТЬ' />
			</View>
			<View style={styles.button_wrapper}>
				<Button color='#20B2AA' title='СБРОСИТЬ' />
			</View>
			<View style={styles.button_wrapper}>
				<Button color='#20B2AA' title='АНАЛИЗ ПАРАМЕТРОВ ЗДОРОВЬЯ' />
			</View>

			<Image
				style={styles.img}
				source={{
					uri: 'https://storage.myseldon.com/news-pict-89/89FB2B705526BA6BAE8C196493BF3452',
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		borderBottomWidth: 1,
		borderColor: '#000',
		padding: 10,
		marginVertical: 20,
		marginHorizontal: '20%',
		width: '60%',
	},
	img: {
		height: 300,
		weight: 200,
	},
	select_wrapper:{
		marginHorizontal: '20%',
		marginBottom: 20
	},
	button_wrapper:{
		marginHorizontal: '20%',
		marginBottom: 10
	}
})
