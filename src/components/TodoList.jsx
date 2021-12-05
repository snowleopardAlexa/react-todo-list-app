import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {

    const [todos, setTodos] = useState([])

    return (
        <div className="todo-list">
            <h1>What are the tasks for today?</h1>
            <TodoForm />
        </div>
    )
}

export default TodoList;
