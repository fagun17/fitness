import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
	panelRoot: {
		height: '100%',
		width: '100%',
	},
})

const Panel = props => {
	return <View style={styles.panelRoot}>{props.children}</View>
}

export default Panel
