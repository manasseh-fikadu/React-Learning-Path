// store/blogSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [], // Initialize with an empty array or mock data
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, action) => {
      const { id, title, body } = action.payload;
      const postIndex = state.posts.findIndex(post => post.id === id);
      if (postIndex !== -1) {
        state.posts[postIndex] = { ...state.posts[postIndex], title, body };
      }
    },
  },
});

export const { setPosts, addPost, updatePost } = blogSlice.actions;

export default blogSlice.reducer;
