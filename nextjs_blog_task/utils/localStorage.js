// 'use client'
// utils/localStorage.js

const STORAGE_KEY = "blogPosts";

export const getStoredPosts = () => {
  const storedPosts = localStorage.getItem(STORAGE_KEY);
  return storedPosts ? JSON.parse(storedPosts) : [];
};

export const storePosts = (posts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};
