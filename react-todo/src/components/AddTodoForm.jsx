// TodoList.jsx

import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
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

const initialTodos = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Walk the dog", completed: true },
  { id: 3, text: "Clean the house", completed: false }
];

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
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
