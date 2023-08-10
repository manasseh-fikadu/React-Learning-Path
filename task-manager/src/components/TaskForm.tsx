import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);

  // Handle input change
  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  // Handle adding a new task
  const handleAddTask = () => {
    if (task.trim() !== "") {
      dispatch(addTask({ text: task, completed }));
      setTask("");
      setCompleted(false);
    }
  };

  return (
    // Form container with shadow and padding
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
      {/* Input field and button container */}
      <div className="flex items-center space-x-4">
        {/* Input field */}
        <input
          type="text"
          className="flex-grow bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter task"
        />
        {/* Add Task button */}
        <button
          onClick={handleAddTask}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
