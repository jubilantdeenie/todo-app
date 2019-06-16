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
        completed: true
      }, 
      {
        id: 3,
        title: 'Book AirBnb for weekend',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    console.log(id)
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}
        markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
