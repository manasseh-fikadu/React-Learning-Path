import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toggleTaskStatus, removeTask, setFilter } from "../redux/actions";

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);
  const filter = useSelector((state: RootState) => state.filter);
  const [error, setError] = useState(""); // Add error state


  const handleToggleTaskStatus = (index: number) => {
    if (index >= 0 && index < tasks.length) {
      dispatch(toggleTaskStatus(index));
      setError(""); // Clear error on success
    } else {
      setError("Task not found");
    }
  };

  const handleRemoveTask = (index: number) => {
    if (index >= 0 && index < tasks.length) {
      dispatch(removeTask(index));
      setError(""); // Clear error on success
    } else {
      setError("Task not found");
    }
  };

  // Handle setting the filter
  const handleSetFilter = (newFilter: string) => {
    dispatch(setFilter(newFilter));
  };

  // Filter tasks based on the selected filter
  const filteredTasks = filter === "all" ? tasks : tasks.filter((task) => {
    return filter === "completed" ? task.completed : !task.completed;
  });

  return (
    // Container for the task list with shadow and padding
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">Task List</h2>
      {/* Filter buttons */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => handleSetFilter("all")}
          className={`px-4 py-2 rounded-lg ${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } focus:outline-none`}
        >
          All
        </button>
        <button
          onClick={() => handleSetFilter("completed")}
          className={`px-4 py-2 rounded-lg ${
            filter === "completed"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } focus:outline-none`}
        >
          Completed
        </button>
        <button
          onClick={() => handleSetFilter("incomplete")}
          className={`px-4 py-2 rounded-lg ${
            filter === "incomplete"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } focus:outline-none`}
        >
          Incomplete
        </button>
      </div>
      {/* Scrollable table for task display */}
      {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 text-left">Status</th>
              <th className="border p-2 text-left">Task</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task, index) => (
              <tr key={index} className="border">
                <td className="border p-2">
                  {/* Status button */}
                  <button
                    onClick={() => handleToggleTaskStatus(index)}
                    data-testid="statusButton"
                    className={`rounded-lg p-1 ${
                      task.completed ? "text-white" : "text-white"
                    }`}
                  >
                    {task.completed ? "✅" : "❌"}
                  </button>
                </td>
                {/* Task text */}
                <td className="border p-2">{task.text}</td>
                {/* Remove button */}
                <td className="border p-2">
                  <button
                    onClick={() => handleRemoveTask(index)}
                    className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg focus:outline-none"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
