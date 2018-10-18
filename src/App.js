import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count : 0
  }
   increment = () => {
      this.setState( (prevState, props) => {
        return {
        count : prevState.count += 1
      }})
  }
  decrement = () => {
    this.setState( (prevState, props) => {
      return{
      count : prevState.count -= 1
    }})
  }
  render() {
    return (
      <div className="App">
       <h2>Counter</h2>
       <h3>{this.state.count}</h3>
       <button onClick={this.increment.bind(this)}>+</button>
       <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    );
  }
}

export default App;
