"use client";
import React, { useState } from "react";
import { storePosts, getStoredPosts } from "../utils/localStorage";
import Link from "next/link"; // Import Link from Next.js

const BlogPost = ({ post }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.body);
  const [error, setError] = useState(null);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    // Reset the edited values to the original post values
    setEditedTitle(post.title);
    setEditedContent(post.body);
    setError(null);
    setEditMode(false);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            id: post.id,
            title: editedTitle,
            body: editedContent,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update blog post.");
      }

      // Update local storage with the edited post
      const updatedPosts = getStoredPosts().map((storedPost) =>
        storedPost.id === post.id
          ? { ...storedPost, title: editedTitle, body: editedContent }
          : storedPost
      );
      storePosts(updatedPosts);

      setError(null);
      setEditMode(false);

      // Use router to navigate to the individual blog page
      // window.location.href = `/post/${post.id}`;
    } catch (error) {
      setError("Failed to update blog post.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-700 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold font-serif">Blog Post</h1>
          <p className="mt-2 text-sm">
            Explore insightful articles and share your own thoughts.
          </p>
        </div>
      </header>
      <div className="container mx-auto px-4 py-12">
        {editMode ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Edit Post</h2>
            <p className="font-semibold">Title</p>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
            />
            <p className="font-semibold">Content</p>
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full h-32 p-2 mb-4 border rounded resize-none focus:outline-none focus:border-blue-500"
            />
            <div className="flex space-x-4">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 focus:outline-none"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-gray-700 py-2 px-6 rounded hover:bg-gray-400 focus:outline-none"
              >
                Cancel
              </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              {editedTitle ||
                post.title
                  .map((word) => {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                  })
                  .join(" ")}
            </h2>
            <div className="mb-6">
              <img
                src="https://source.unsplash.com/random/400x200"
                alt="Blog Post"
                className="rounded-lg shadow-md"
              />
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Published on: August 8, 2023
            </p>
            <p className="text-lg leading-relaxed mb-4 font-serif">
              {editedContent || post.body}
            </p>
            <button
              onClick={handleEdit}
              className="mt-4 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 focus:outline-none"
            >
              Edit
            </button>
          </div>
        )}
        <Link href="/">
          <button className="mt-8 bg-gray-300 text-gray-700 py-2 px-6 rounded hover:bg-gray-400 focus:outline-none">
            Go Back
          </button>
        </Link>
      </div>
      <footer className="bg-gray-700 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-center">
            &copy; 2023 My Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
