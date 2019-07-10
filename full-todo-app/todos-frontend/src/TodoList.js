/*jslint
    white
*/

import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCalls from './api';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			todos: []
		}
	}

	componentWillMount() {
		this.loadTodos();
	}

	loadTodos = async () => {
		let todos = await apiCalls.getTodos()
		this.setState({ todos });		
	}

	addTodo = async (text) => {
		let newTodo = await apiCalls.createTodo(text);
		this.setState({
			todos: [...this.state.todos, newTodo]
		});
	}

	deleteTodo = async id => {
		await apiCalls.deleteTodo(id)
		this.setState({
			todos: this.state.todos.filter(todo => todo._id !== id)
		});
	}

	toggleTodo = async todo => {
		let updatedTodo = await apiCalls.updateTodo(todo);
		this.setState({
			todos: this.state.todos.map(t => 
				(t._id === updatedTodo._id) 
				? {...t, completed: !t.completed}
				: t)
		});
	}

	render() {
		const todos = this.state.todos.map((t) => (
			<TodoItem 
				key={t._id}
				{...t}
				onDelete={this.deleteTodo.bind(this, t._id)}
				onToggle={this.toggleTodo.bind(this, t)}
			/>));

		return (
			<div>
				<h1>To do list</h1>
				<TodoForm addTodo={ this.addTodo } />
				<ul>
					{ todos }
				</ul>
			</div>
		);
	}

}

export default TodoList;