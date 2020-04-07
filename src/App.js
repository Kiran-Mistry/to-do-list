import React, { Component } from 'react';
import Todos from "./components/Todos";
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'take out the trash',
        completed: false,
      }, 
      {
        id: 2,
        title: 'buy nappies',
        completed: false,
      }, 
      {
        id: 3,
        title: 'watch tv with family',
        completed: false,
      }, 
    ]
  }
    // function used to change state of todo item
    // passes item id into function
    // toggles between ticked and unticked
    markComplete = (id) => {
      //setting state by looping through all the
      //items in the todo list
      this.setState({ todos: this.state.todos.map(todo => {
        //if the current todo item is the same as
        //the todo item being passed through i/.e 
        //an item we click
        if(todo.id === id) {
          //set tjhe curremt item list to its opposite
          //e.g. if it is unticked and you click it
          //then mark it as ticked and line=through
          todo.completed = !todo.completed
        }
        return todo;
      })})
    }

    // Delete ToDo

    /**
     * passes in everything in state object and
     * filters where the todo id is not present in the id 
     * we have
     * filter() creates new array with elements that pass condition
     */
    delTodo = (id) => {
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});

    }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
