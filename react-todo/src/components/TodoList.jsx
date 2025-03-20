// TodoList.jsx

import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const initialTodos = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Walk the dog", completed: true },
  { id: 3, text: "Clean the house", completed: false }
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>My Todo List</h2>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              marginBottom: "8px",
            }}
          >
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
