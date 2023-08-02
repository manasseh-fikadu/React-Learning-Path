import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: newTodoText.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoText("");
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id: number, text: string, completed: boolean) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text, completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <h1>Todo Tracker App</h1>
      <div className="add-todo-container">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add new task..."
        />
        <button onClick={handleAddTodo} className="button">
          Add Todo
        </button>
      </div>
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onUpdate={handleUpdateTodo}
      />
    </div>
  );
};

export default App;
