import React, { useState } from 'react';
import { trim } from 'lodash';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  addPost,
  removePost,
  selectPosts,
  Post
} from './postsSlice';

export function Posts() {
  const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();
  const [inputString, setInputString] = useState('');

  const handleAddPostButton = (e: any) => {
    e.preventDefault();
    if (trim(inputString)) {
      dispatch(addPost(inputString));
      setInputString('');
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: Post, index: number) => {
          return (
            <li key={post.id}>
              {post.text}
              &nbsp;
              <button
                onClick={(e) => dispatch(removePost(post.id))}>
                remove
              </button>
            </li>
          );
        })}
      </ul>
      <input
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        />
      <button
      onClick={handleAddPostButton}>
        Add Post
      </button>
    </div>
  )
}
