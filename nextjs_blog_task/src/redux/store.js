// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './postsSlice';

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export default store;
