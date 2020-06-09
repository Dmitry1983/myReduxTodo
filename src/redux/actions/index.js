// action indexs
import { INCREMENT, DECREMENT, RESET } from '../types'

export const increment = (i) => {
	return { type: INCREMENT, payload: i }
}

export const decrement = (i) => {
	return { type: DECREMENT, payload: i }
}

export const reset = () => {
	return { type: RESET, payload: 0 }
}
