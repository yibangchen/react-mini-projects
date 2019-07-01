import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nextTodo: "",
      todos: []
    };
  }

  render() {
    const { nextTodo } = this.state;

    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={ e => {
          e.preventDefault();
          const todos = [...this.state.todos, this.state.nextTodo];
          this.setState({
            nextTodo: "", todos
          });
        }}>
          <input
            className="todo-input"
            autoComplete="off"
            type="text"
            name="nextTodo"
            placeholder="What needs to be done?"
            value={nextTodo}
            onChange={(e) => this.setState({[e.target.name]: e.target.value })}
          />          
        
          <button>SAVE</button>

          <div className="todo-list">
            <ol>
              { this.state.todos.map((t, i) => <li key={i}>{t}</li>) }
            </ol>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
