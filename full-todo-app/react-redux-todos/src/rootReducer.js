/*jslint
    white
*/

import { ADD_TODO, REMOVE_TODO, GET_TODOS } from './actionCreator'

const initialState = {
	todos: []
}

export default function rootReducer(state=initialState, action){
	switch(action.type) {
		case GET_TODOS:
			return {...state, todos: action.data}
		case ADD_TODO:
			return {...state, todos:[...state.todos, action.todo]}
			// var newState = {...state};
			// newState.id++;
			// return {
			// 	...newState,
			// 	todos:[...newState.todos, {task:action.task, id:newState.id}]
			// };
		case REMOVE_TODO:
			var todos = state.todos.filter( val => val._id !== action.id);
			return {...state, todos};
		default:
			return state;
	}
}