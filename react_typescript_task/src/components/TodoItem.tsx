import React, { useState } from "react";
import "./TodoItem.css"

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onUpdate: (id: number, text: string, completed: boolean) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onDelete,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleToggleComplete = () => {
    onUpdate(id, editedText, !completed);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate(id, editedText, completed);
    setIsEditing(false);
  };

  const handleClick = () => {
    if (!isEditing) {
      handleToggleComplete();
    }
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggleComplete}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span
          className={`todo-text ${completed ? "completed" : ""}`}
          onClick={handleClick}
        >
          {text}
        </span>
      )}
      {isEditing ? (
        <button onClick={handleSaveClick} className="button">
          Save
        </button>
      ) : (
        <button onClick={handleEditClick} className="button">
          Edit
        </button>
      )}
      <button onClick={handleDelete} className="button-delete">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
