// Import necessary components and functions
"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { storePosts } from "../utils/localStorage";

// Component for displaying a list of blog posts
const BlogList = ({ posts }) => {
  // Store the received posts in local storage when the component mounts or when posts change
  useEffect(() => {
    storePosts(posts);
  }, [posts]);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      {/* Section title */}
      <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
      {/* Grid layout for displaying posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Iterate through each post and create a display card */}
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-100 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 rounded-lg p-6"
          >
            {/* Link to the detailed post page */}
            <Link href={`/post/${post.id}`} legacyBehavior>
              <a className="block mb-2">
                {/* Display the post title with capitalized beginning words */}
                <h3 className="text-blue-500 hover:underline text-xl font-serif">
                  {post.title
                    .split(" ")
                    .map((word) => {
                      return word.charAt(0).toUpperCase() + word.slice(1);
                    })
                    .join(" ")}
                </h3>
              </a>
            </Link>
            {/* Display a preview of the post body */}
            <p className="text-gray-500">{post.body}</p>
            {/* Link to the detailed post page */}
            <div className="mt-4">
              <Link href={`/post/${post.id}`} legacyBehavior>
                <a className="text-blue-500 hover:underline">Read more</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the BlogList component as the default export
export default BlogList;
