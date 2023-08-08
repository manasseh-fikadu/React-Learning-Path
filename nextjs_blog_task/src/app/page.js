// Import necessary components and functions
"use client";
import React, { useState, useEffect } from "react";
import BlogList from "../../components/BlogList"; // Import the BlogList component
import Link from "next/link"; // Import Link from Next.js

import { getStoredPosts, storePosts } from "../../utils/localStorage";

// Function to fetch a list of posts from an API
async function getPostsFromAPI() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = await response.json();
  return posts;
}

// Component for the home page
const Home = () => {
  const [data, setData] = useState([]);

  // Load data when the component mounts
  useEffect(() => {
    const storedPosts = getStoredPosts();
    if (storedPosts && storedPosts.length > 0) {
      // Use data from local storage if available
      setData(storedPosts);
    } else {
      // Fetch data from API and store in local storage
      getPostsFromAPI().then((fetchedPosts) => {
        setData(fetchedPosts);
        storePosts(fetchedPosts);
      });
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header section */}
      <header className="bg-blue-700 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 font-serif">
            Welcome to My Blog
          </h1>
          <p className="text-lg mb-8">
            Explore insightful articles and share your own thoughts.
          </p>
          {/* Link to create a new blog post */}
          <Link href="/create" legacyBehavior>
            <a className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded transition duration-300">
              Create New Blog Post
            </a>
          </Link>
        </div>
      </header>
      {/* Main content section */}
      <main className="container mx-auto px-4 py-12">
        {/* Display the list of blog posts */}
        {data && data.length > 0 ? (
          <BlogList posts={data} />
        ) : (
          <p className="text-center mt-8">No blog posts available.</p>
        )}
      </main>
      {/* Footer section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Export the Home component as the default export
export default Home;
