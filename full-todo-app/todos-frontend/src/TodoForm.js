/*jslint
    white
*/

import React, { Component } from 'react';

class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { inputValue: 'type something'};
	}

	updateInput = (e) => {
		this.setState({
			inputValue: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.inputValue);
	}

	render() {
		return (
			<div>
				<input 
					type="text" 
					value={ this.state.inputValue }
					onChange={ this.updateInput }
				/>
				<button
					onClick={ this.handleSubmit }
				>
					Add Todo
				</button>
			</div>
		);
	}
}

export default TodoForm;