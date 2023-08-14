import React from "react";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../pages/features/blogSlice";

interface DeleteButtonProps {
  blogId: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ blogId }) => {
  const dispatch = useDispatch();

  const handleDeleteBlog = () => {
    dispatch(deleteBlog(blogId));
  };

  return (
    <button
      onClick={handleDeleteBlog}
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
