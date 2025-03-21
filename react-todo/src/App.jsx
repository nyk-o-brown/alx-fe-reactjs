import React, { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import './App.css';

const App = () => {
  // Initialize todos state
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
  ]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
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
    <div className="app">
      <h1>Todo App</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
};

export default App;
