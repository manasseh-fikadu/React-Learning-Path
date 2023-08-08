"use client";
import React, { useState } from "react";
import { storePosts, getStoredPosts } from "../utils/localStorage";
import Link from 'next/link'

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleCreate = async () => {
    if (!title || !body) {
      setError("Please enter both title and content.");
      return;
    }

    try {
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
      window.location.href = "/";
    } catch (error) {
      setError("Failed to create blog post.");
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
        <h2 className="text-2xl font-semibold mb-4">Create New Blog Post</h2>
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
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button
          onClick={handleCreate}
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 focus:outline-none"
        >
          Create
        </button>
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

export default CreateBlog;
