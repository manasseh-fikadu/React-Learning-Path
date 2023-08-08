// Import necessary components and functions
"use client";
import React, { useState } from "react";
import { storePosts, getStoredPosts } from "../utils/localStorage";
import Link from "next/link";

// Component for creating a new blog post
const CreateBlog = () => {
  // State to manage input values and error
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  // Generate a random ID for a new post
  const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  // Handle the creation of a new blog post
  const handleCreate = async () => {
    if (!title || !body) {
      setError("Please enter both title and content.");
      return;
    }

    try {
      // Create a new post object
      const newPost = {
        id: generateRandomId(),
        userId: generateRandomId(),
        title,
        body,
      };

      // Update local storage with the new post
      const updatedPosts = [...getStoredPosts(), newPost];
      storePosts(updatedPosts);

      setError(null);
      setTitle("");
      setBody("");
      // Redirect to the list of blog posts
      window.location.href = "/";
    } catch (error) {
      setError("Failed to create blog post.");
    }
  };

  // Render the create new blog post form
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header section */}
      <header className="bg-blue-700 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold font-serif">Blog Post</h1>
          <p className="mt-2 text-sm">
            Explore insightful articles and share your own thoughts.
          </p>
        </div>
      </header>
      {/* Main content section */}
      <div className="container mx-auto px-4 py-12">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4">Create New Blog Post</h2>
        {/* Input field for title */}
        <div className="mb-4">
          <label htmlFor="title" className="text-gray-700 block mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Textarea for content */}
        <div className="mb-4">
          <label htmlFor="body" className="text-gray-700 block mb-2">
            Content:
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full h-32 p-2 border rounded resize-none focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Error message */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {/* Create button */}
        <button
          onClick={handleCreate}
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 focus:outline-none"
        >
          Create
        </button>
        {/* Link to go back to the list of blog posts */}
        <Link href="/">
          <button className="mt-8 bg-gray-300 text-gray-700 py-2 px-6 rounded hover:bg-gray-400 focus:outline-none">
            Go Back
          </button>
        </Link>
      </div>
      {/* Footer section */}
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

// Export the CreateBlog component as the default export
export default CreateBlog;
