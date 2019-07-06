import React, { Component } from 'react';
import Header from './Header';
import GameBoard from './GameBoard';
import Success from './Success';
import './App.css';

const STATUS = {
  INPROGRESS: 0,
  WIN: 1,
  LOST: 2
} 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      winStatus: STATUS.INPROGRESS
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <GameBoard />
        <Success status={ this.state.winStatus } />
      </div>
    );
  }
}
export default App;