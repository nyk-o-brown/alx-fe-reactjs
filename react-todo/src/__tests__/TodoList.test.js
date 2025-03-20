// App.test.jsx

import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "../App"; // Main component that includes TodoList and AddTodoForm

describe("Todo App", () => {
  // Test 1: Initial Render
  test("renders initial demo todos", () => {
    // Render the main App component
    render(<App />);

    // Verify that known demo todos appear in the document.
    // These strings should match the initial state in your App component.
    expect(screen.getByText(/Buy groceries/i)).toBeInTheDocument();
    expect(screen.getByText(/Walk the dog/i)).toBeInTheDocument();
  });

  // Test 2: Adding Todos
  test("allows users to add a new todo", () => {
    render(<App />);

    // Locate the input field by its placeholder text.
    const inputField = screen.getByPlaceholderText(/enter new todo/i);
    // Locate the Add Todo button (it uses the button text).
    const addButton = screen.getByRole("button", { name: /add todo/i });

    // Simulate user typing a new todo item.
    fireEvent.change(inputField, { target: { value: "Learn Testing" } });
    // Simulate form submission by clicking the add button.
    fireEvent.click(addButton);

    // Assert that the new todo text is now rendered.
    expect(screen.getByText(/learn testing/i)).toBeInTheDocument();
  });

  // Test 3: Toggling Todos
  test("toggles a todo item's completed state", () => {
    render(<App />);

    // Get a reference to the todo text. We'll use the "Buy groceries"
    // todo as an example. This todo starts as not completed.
    const todoText = screen.getByText(/buy groceries/i);
    const todoItem = todoText.closest("li");

    // Verify initial style. Our implementation uses an inline style:
    // if not completed, textDecoration should be "none"
    expect(todoItem).toHaveStyle("text-decoration: none");

    // Simulate clicking on the todo text to toggle its completed status.
    fireEvent.click(todoText);

    // After toggling, the inline style should update ("line-through" for completed).
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  // Test 4: Deleting Todos
  test("deletes a todo item", () => {
    render(<App />);

    // Find the specific todo to delete. We'll again choose "Buy groceries".
    const todoItem = screen.getByText(/buy groceries/i).closest("li");

    // Use the 'within' helper to get the Delete button that's inside this list item.
    const deleteButton = within(todoItem).getByRole("button", {
      name: /delete/i,
    });

    // Simulate a click event on the Delete button.
    fireEvent.click(deleteButton);

    // Verify that "Buy groceries" is no longer in the document.
    expect(screen.queryByText(/buy groceries/i)).not.toBeInTheDocument();
  });
});
