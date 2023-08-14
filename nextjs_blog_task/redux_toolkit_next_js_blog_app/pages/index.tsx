// BlogList.tsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditModal from "../components/EditBlogForm";
import DeleteButton from "../components/DeleteButton";
import { selectBlogs, Blog } from "./features/blogSlice";
import AddBlogButton from "../components/AddBlogButton";

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = () => {
  const blogs = useSelector(selectBlogs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const handleEditClick = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4">Blog List</h2>
        <ul>
          <AddBlogButton />
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="bg-gray-800 p-6 rounded-lg mb-4 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-300">{blog.content}</p>
              <div className="mt-4">
                <button
                  onClick={() => handleEditClick(blog)}
                  className="bg-white text-gray-900 px-4 py-2 rounded-lg mr-2"
                >
                  Edit
                </button>
                <DeleteButton blogId={blog.id} />
              </div>
            </li>
          ))}
        </ul>
        {isModalOpen && (
          <EditModal blog={selectedBlog} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default BlogList;
