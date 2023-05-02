import React, { useState } from 'react'
import { Button, Image, StyleSheet, TextInput, View } from 'react-native'
import Gucci from '../components/Gucci'

export default function Form() {
	const [text, setValue] = useState('')

	const onChange = text => {
		setValue(text)
	}
	return (
		<View>
			<Gucci />
			<TextInput
				style={styles.input}
				onChangeText={onChange}
				placeholder='Введите возраст...'
			/>
			<TextInput
				style={styles.input}
				onChangeText={onChange}
				placeholder='Введите рост...'
			/>
			<TextInput
				style={styles.input}
				onChangeText={onChange}
				placeholder='Введите вес...'
			/>
			<TextInput
				style={styles.input}
				onChangeText={onChange}
				placeholder='Введите пол...'
			/>
			<Button color='#20B2AA' title='СОХРАНИТЬ' />
			<Button color='#20B2AA' title='СБРОСИТЬ' />
			<Button color='#20B2AA' title='АНАЛИЗ ПАРАМЕТРОВ ЗДОРОВЬЯ' />

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
})
