// Define a constant key for storing blog posts in local storage
const STORAGE_KEY = "blogPosts";

// Retrieve stored blog posts from local storage
export const getStoredPosts = () => {
  const storedPosts = localStorage.getItem(STORAGE_KEY);
  return storedPosts ? JSON.parse(storedPosts) : [];
};

// Store blog posts in local storage
export const storePosts = (posts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};
