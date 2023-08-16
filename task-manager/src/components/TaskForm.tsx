// TaskForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(""); // Add error state

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      dispatch(addTask({ text: task, completed }));
      setTask("");
      setCompleted(false);
      setError(""); // Clear error on success
    } else {
      setError("Task text cannot be empty");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
        <form id="task-form">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          className="flex-grow bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter task"
        />
        <button
          onClick={handleAddTask}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none"
        >
          Add Task
        </button>
      </div>
        </form>
    </div>
  );
};

export default TaskForm;
