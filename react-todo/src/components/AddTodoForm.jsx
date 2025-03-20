// TodoList.jsx

import React, { useState } from "react";

// 1. Define a static array of todo items
const initialTodos = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Walk the dog", completed: true },
  { id: 3, text: "Clean the house", completed: false }
];

const AddTodoForm = ({ addTodo }) => {
  // Local state for the input field
  const [input, setInput] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form reload behavior
    if (input.trim()) {
      // Call the parent's addTodo function with trimmed input
      addTodo(input.trim());
      // Clear the input field after submission
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

// 2. Create a functional component that renders the todo list
const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    const newTodo = { id: todos.length + 1, text, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h2>My Todo List</h2>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          // 3. Use the unique 'id' as the key for each list item
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
