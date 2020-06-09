// reduser index
import { INCREMENT, DECREMENT, RESET, ADD_TODO } from '../types'

const initialState = []

export default function Todo(state = initialState, action) {
	console.log(action)
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				summ: state.summ + action.payload,
			}
		case DECREMENT:
			return {
				...state,
				summ: state.summ - action.payload,
			}
		case RESET:
			return {
				...state,
				summ: action.payload,
			}
		case ADD_TODO:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false,
				},
			]
		case 'TOGGLE_TODO':
			return state.map((todo) =>
				todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
			)
		default:
			return state
	}
}
