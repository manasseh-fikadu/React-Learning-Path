import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  return (
    // Outer container with background, min-height, and flex alignment
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-10">
      {/* Inner container with responsive width */}
      <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5">
        {/* Card-like container */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Heading */}
          <h1 className="text-3xl font-bold mb-6 text-center">Task Manager</h1>
          {/* TaskForm component */}
          <TaskForm />
        </div>
        {/* Margin for separation */}
        <div className="mt-6">
          {/* TaskList component */}
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default App;
