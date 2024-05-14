import React from 'react'
import './todoStyle.css'
import AddTodo from '../AddTodos/AddTodo'

import DisplayTodo from '../DisplayTodu/DisplayTodo'

function TodoView() {
    return (
        <div>
            <div className="nav">
                <h2>TO DO APP</h2>
            </div>
            <AddTodo />
            <DisplayTodo />
        </div>
    )
}

export default TodoView