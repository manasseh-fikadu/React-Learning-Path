import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editNote, Note } from "../features/notesSlice";

interface NoteModalProps {
  note: Note;
  onClose: () => void;
}

const NoteModal: React.FC<NoteModalProps> = ({ note, onClose }) => {
  const dispatch = useDispatch();
  const [updatedText, setUpdatedText] = useState(note.text);
  const [updatedTitle, setUpdatedTitle] = useState(note.title);

  // Handle saving the updated note
  const handleSave = () => {
    dispatch(editNote({ id: note.id, title: updatedTitle, text: updatedText }));
    onClose(); // Close the modal
  };

  return (
    // Background overlay for the modal
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        {/* Title */}
        <p className="text-white font-semibold mb-1">Title</p>
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          placeholder="Enter your title"
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-black"
        />
        {/* Note */}
        <p className="text-white font-semibold mb-1">Note</p>
        <textarea
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
          className="w-full h-40 px-3 py-2 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-500 text-black"
        />
        {/* Save and Cancel buttons */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="ml-2 text-white hover:text-gray-500 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
