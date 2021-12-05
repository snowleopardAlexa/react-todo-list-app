import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }

    return (
        <div className="todo-list">
            <h1>Alexa, what are you going to do today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo 
              todos={todos} 
              completeTodo={completeTodo} 
            />
        </div>
    )
}

export default TodoList;
