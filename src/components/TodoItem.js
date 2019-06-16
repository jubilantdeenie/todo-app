import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#d8e5c6',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    render() {
        const {id, title } = this.props.todo;
        return (
            <div style={ this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind
                (this, id)} /> {' '}
                { title }
                <button onClick={this.props.delTodo.bind(this, id)}
                style={btnStyle}>x</button>
                </p>  
            </div>
        )
    }
}

//Proptypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#a3c185',
    color: '#1a320f',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
