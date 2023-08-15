import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editBlog, Blog } from '../pages/features/blogSlice';
import DeleteButton from './DeleteButton';

interface EditModalProps {
  blog: Blog | null;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ blog, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
    }
  }, [blog]);

  const handleSave = () => {
    if (blog) {
      const updatedBlog = { ...blog, title, content };
      dispatch(editBlog(updatedBlog));
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-900 z-10">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-black">Edit Blog</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:border-blue-500 text-black"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4 h-40 resize-none focus:outline-none focus:border-blue-500 text-black"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600 focus:outline-none"
          >
            Save
          </button>
          <DeleteButton blogId={blog ? blog.id : -1} />
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

export default EditModal;
