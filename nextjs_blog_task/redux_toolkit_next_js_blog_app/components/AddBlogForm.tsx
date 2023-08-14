import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../pages/features/blogSlice";

interface AddBlogFormProps {
  onClose: () => void;
}

const AddBlogForm: React.FC<AddBlogFormProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddBlog = () => {
    if (title && content) {
      const newBlog = {
        id: Date.now(),
        title,
        content,
      };
      dispatch(addBlog(newBlog));
      setTitle("");
      setContent("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-900 z-10">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-black">Add Blog</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:border-blue-500 text-black"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4 h-40 resize-none focus:outline-none focus:border-blue-500 text-black"
        />
        <div className="flex justify-end">
          <button
            onClick={handleAddBlog}
            className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600 focus:outline-none"
          >
            Add
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg ml-2 hover:bg-gray-400 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlogForm;
