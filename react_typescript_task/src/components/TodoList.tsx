import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, text: string, completed: boolean) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onUpdate }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
