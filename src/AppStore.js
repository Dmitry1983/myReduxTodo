import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from '../src/redux/actions'

export const AppStore = () => {
	const count = useSelector((state) => state.summ)
	const dispatch = useDispatch()
	const { view, text, viewBtn, viewText } = styles
	return (
		<View style={view}>
			<View style={viewText}>
				<Text style={text}> REDUX Counter</Text>

				<Text style={text}>{count}</Text>
			</View>

			<View style={viewBtn}>
				<Button title="PLUS" onPress={() => dispatch(increment(1))} />
				<Button title="MINUS" onPress={() => dispatch(decrement(1))} />
				<Button title="RESET" onPress={() => dispatch(reset())} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'grey',
	},
	viewBtn: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	viewText: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 20,
	},
	text: {
		fontSize: 25,
	},
})
