import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../features/notesSlice";

const NoteForm: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dispatch the action to add a new note with the provided title and text
    dispatch(addNote({ id: Date.now(), title, text }));
    // Clear the input fields after adding the note
    setText("");
    setTitle("");
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">Add a Note</h2>
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your title"
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 text-black"
        />
        {/* Textarea for Note */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your note"
          className="w-full h-32 px-3 py-2 rounded-md border border-gray-300 resize-none focus:outline-none focus:ring focus:border-blue-500 text-black"
        />
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
