/*jslint
    white
*/

import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import {addTodo, removeTodo, getTodos} from './actionCreator';
import TodoForm from './TodoForm';
import { Route } from 'react-router-dom';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { task: ''}
	}

	componentDidMount() {
		this.props.getTodos();
	}

	handleAdd = val => {
		this.props.addTodo(val);
	}

	// handleSubmit = e => {
	// 	e.preventDefault();
	// 	this.props.addTodo(this.state.task);
	// 	e.target.reset();
	// }

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
		let todos= this.props.todos.map((todo) => 
			<Todo 
				removeTodo={this.removeTodo.bind(this, todo._id)} 
				task={todo.task} 
				key={todo._id} />);
		return (
			<div>
				<Route 
					path="/todos/new" 
					component={ props=>( 
						<TodoForm 
							{...props} 
							handleSubmit={ this.handleAdd }
						/> )} />
				<Route exact path="/todos" component={ ()=>
						<div><ul>{todos}</ul></div>} />
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

export default connect(mapStateToProps, { addTodo, removeTodo, getTodos })(TodoList);

