import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import mockData from "../../data/mockData.json";

export interface Blog {
  id: number;
  title: string;
  content: string;
}

interface BlogState {
  blogs: Blog[];
}

const initialState: BlogState = {
  blogs: mockData,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action: PayloadAction<Blog>) => {
      state.blogs.push(action.payload);
    },
    editBlog: (state, action: PayloadAction<Blog>) => {
      const index = state.blogs.findIndex(
        (blog) => blog.id === action.payload.id
      );
      if (index !== -1) {
        state.blogs[index] = action.payload;
      }
    },
    deleteBlog: (state, action: PayloadAction<number>) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
  },
});

export default blogSlice.reducer;

export const { addBlog, editBlog, deleteBlog } = blogSlice.actions;

export const selectBlogs = (state: RootState) => state.blogs.blogs;
