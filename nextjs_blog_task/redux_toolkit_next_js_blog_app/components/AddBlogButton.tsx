import React, { useState } from "react";
import AddBlogForm from "./AddBlogForm";

const AddButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mb-4">
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Add Blog
      </button>
      {isModalOpen && <AddBlogForm onClose={handleCloseModal} />}
    </div>
  );
};

export default AddButton;
