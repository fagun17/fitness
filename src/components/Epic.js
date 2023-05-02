import { StyleSheet, View } from 'react-native'

import IconButton from './IconButton'

const styles = StyleSheet.create({
	epicRoot: {
		height: 70,
		width: '100%',
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#ffff',
		zIndex: 0,
		borderTopColor: '#ddd',
		borderTopWidth: 1,
		borderLeftWidth: 0,
		borderBottomWidth: 0,
		borderRightWidth: 0,
		borderStyle: 'solid',
	},
})

const Epic = ({ buttons, onClick }) => {
	return (
		<View style={styles.epicRoot}>
			{buttons.map((btn, index) => (
				<IconButton key={index} onClick={() => onClick(btn)} src={btn.image} />
			))}
		</View>
	)
}

export default Epic
