import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote, Note } from "../features/notesSlice";
import NoteModal from "./NoteModal";

const NoteList: React.FC = () => {
  // Retrieve notes from the Redux store
  const notes = useSelector(
    (state: { notes: { notes: Note[] } }) => state.notes.notes
  );

  // Initialize Redux dispatch function
  const dispatch = useDispatch();

  // State to track the selected note for editing
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  // Handle editing a note
  const handleEdit = (note: Note) => {
    setSelectedNote(note);
  };

  // Handle deleting a note
  const handleDelete = (id: number) => {
    dispatch(deleteNote(id));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-96 mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">Notes</h2>
      <ul className="space-y-2">
        {/* Iterate through each note */}
        {notes.map((note) => (
          <li
            key={note.id}
            className="flex items-center justify-between px-4 py-2 bg-white rounded-md"
          >
            {/* Note content */}
            <div>
              <p className="font-bold text-black">{note.title}</p>
              <p className="text-gray-500">{note.text}</p>
            </div>
            {/* Edit and Delete buttons */}
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(note)}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(note.id)}
                className="text-red-500 hover:underline focus:outline-none"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* Render the NoteModal if a note is selected */}
      {selectedNote && (
        <NoteModal note={selectedNote} onClose={() => setSelectedNote(null)} />
      )}
    </div>
  );
};

export default NoteList;
