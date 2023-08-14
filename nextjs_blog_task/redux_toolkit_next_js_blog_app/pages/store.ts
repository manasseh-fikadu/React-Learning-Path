import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './features/blogSlice';

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    // Add more reducers if needed
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
