import React, { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

const App = () => {
  // 1. Initialize todos as a state variable;
  // Here, we start with an initial array of dummy todos.
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
  ]);

  // Initialize count as a state variable
  const [count, setCount] = useState(0);

  // 2. Function to add a new todo.
  const addTodo = (text) => {
    // Use Date.now() for a quick unique id.
    const newTodo = { id: Date.now(), text, completed: false };
    // Spread the current todos and add the new one.
    setTodos([...todos, newTodo]);
  };

  // 3. Function to toggle the 'completed' status of a todo.
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        // If the todo id matches, flip the completed flag.
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 4. Function to delete a todo.
  const deleteTodo = (id) => {
    // Filter out the todo whose id matches.
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>Todo App</h1>
      {/* Render the form and pass the addTodo function as a prop */}
      <AddTodoForm addTodo={addTodo} />
      {/* Render the todo list along with toggle and delete handlers */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
