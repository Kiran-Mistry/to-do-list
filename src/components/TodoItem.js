import React, { Component } from 'react';
import PropTypes from "prop-types";


class TodoItem extends Component {

    // function to style list items
    getStyle = () => {
        return {

            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            /*
            ternary operator - if todo is completed, add
            line-through to text, otherwise leave blank
            */
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    render() {

        // destructuring used to pull out variables to use
        // this is better than doing this.props.todo.title 
        const { id, title } = this.props.todo;

        return (
            /* 
            inline style for each todo list item
            calls method from the class called getStyle
            and calls it.

            when the checkbox is clicked, monitored by 
            onChange click event, method is only then called

            this keyword used as method is in the class
            arrow function used so can access props
            props is used in the method to pass up the tree
            bind is used to pass up id?

            */
            <div style={this.getStyle()}> 
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                        (this, id)}/>
                    {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: `#ff0000`,
    color: '#fff',
    border: 'd',
    padding: '3px 7px',
    borderRadius: '80%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
