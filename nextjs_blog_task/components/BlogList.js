"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { storePosts } from "../utils/localStorage";

const BlogList = ({ posts }) => {
  useEffect(() => {
    storePosts(posts);
  }, [posts]);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-100 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 rounded-lg p-6"
          >
            <Link href={`/post/${post.id}`} legacyBehavior>
              <a className="block mb-2">
                <h3 className="text-blue-500 hover:underline text-xl font-serif">
                  {/* let's make all beginning words uppercase */}
                  {post.title
                    .split(" ")
                    .map((word) => {
                      return word.charAt(0).toUpperCase() + word.slice(1);
                    })
                    .join(" ")}
                </h3>
              </a>
            </Link>
            <p className="text-gray-500">{post.body}</p>
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

export default BlogList;
