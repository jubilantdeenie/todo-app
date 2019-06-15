import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Go to the store',
        completed: false
      },
      {
        id: 2,
        title: 'Work on A-Frame',
        completed: false
      }, 
      {
        id: 3,
        title: 'Book AirBnb for weekend',
        completed: false
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
