import React, { Component } from 'react';
import PropTypes from "prop-types";


class TodoItem extends Component {
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
        return (
            <div style={this.getStyle()}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}

export default TodoItem;
