import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
    render() {
        // for each to-do that we loop through
        return this.props.todos.map((todo) => (
            // return the title of that to-do in h3
            <TodoItem key={todo.id} todo={todo}/>
        ));
    }
}

/*
prop types are included as a validation - to say this
component must have these props
*/

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;

