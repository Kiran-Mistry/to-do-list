import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo"
import About from "./components/pages/About"
//import { v4 as uuidv4 } from 'uuid';

/*
axios is used to make https requests
to get data from external api
*/
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {

    todos:[],

    // this method hard codes our todos
    // todos: [
    //   {
    //     id: uuidv4(),
    //     title: 'take out the trash',
    //     completed: false,
    //   }, 
    //   {
    //     id: uuidv4(),
    //     title: 'buy nappies',
    //     completed: false,
    //   }, 
    // ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
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
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
      

    }

    /**
     * ADD todo
     * 
     * need to sort out the unique if problem!
     */
    addTodo = (title) => {

      // this was used to set our own unique id before using axios
      // const newTodo = {
      //   id: uuidv4(),
      //   title,
      //   completed: false,
      // }
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        // id: uuidv4(),
        title,
        completed: false,
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
      
    }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
