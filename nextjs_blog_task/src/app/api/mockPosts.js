// pages/api/posts.js
import { getStoredPosts, storePosts } from "../../utils/localStorage";

export default function handler(req, res) {
  if (req.method === "GET") {
    const posts = getStoredPosts();
    res.status(200).json(posts);
  } else if (req.method === "POST") {
    const newPost = req.body;
    const posts = [...getStoredPosts(), newPost];
    storePosts(posts);
    res.status(201).json(newPost);
  } else if (req.method === "PUT") {
    const editedPost = req.body;
    const posts = getStoredPosts().map((storedPost) =>
      storedPost.id === editedPost.id
        ? { ...storedPost, title: editedPost.title, body: editedPost.body }
        : storedPost
    );
    storePosts(posts);
    res.status(200).json(editedPost);
  } else {
    res.setHeader("Allow", ["GET", "POST", "PUT"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
