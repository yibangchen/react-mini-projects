/*jslint
    white
*/

import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import {addTodo, removeTodo} from './actionCreator';


class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { task: ''}
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state.task);
		e.target.reset();
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: [e.target.value]
		});
	}

	removeTodo = (id) => {
		this.props.removeTodo(id);
	}

	render() {
		let todos= this.props.todos.map((todo, ind) => 
			<Todo removeTodo={this.removeTodo.bind(this, todo.id)} task={todo.task} key={ind} />);
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="task">Task</label>
					<input type="text" name="task" id="task" onChange={this.handleChange}/>
					<button>Add a todo!</button>
				</form>
				<div>
					<ul>{todos}</ul>
				</div>
			</div>
			);
	}
}

function mapStateToProps(reduxState) {
	return {
		todos: reduxState.todos
	};
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		addTodo: function(task) {
// 			dispatch({
// 				type: "ADD_TODO",
// 				task
// 			});
// 		}
// 	}
// }

export default connect(mapStateToProps, { addTodo, removeTodo })(TodoList);

