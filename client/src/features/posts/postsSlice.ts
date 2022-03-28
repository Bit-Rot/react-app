import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { RootState } from '../../app/store.js';

export interface Post {
  id: string,
  text: string
}

export interface PostsState {
  posts: Array<Post>
}

const newPost = (text: string) => {
  return {
    id: v4(),
    text
  }
}

const initialState: PostsState = {
  posts: [newPost("InitialPost")]
}

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<string>) => {
      const post = newPost(action.payload);
      state.posts.push(post);
    },
    removePost: (state, action: PayloadAction<string>) => {
      const index = state.posts.findIndex((post) => post.id == action.payload);
      if (index === -1) return;

      state.posts.splice(index, 1);
    }
  }
})

export const { addPost, removePost } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
