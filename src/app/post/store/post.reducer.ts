import {
    createReducer, on,
  } from '@ngrx/store';
  import { fetchPostsSuccess } from './post.action';
  import { Post } from '../model/post.model';

  export const postFeatureKey = "post";
  
  export interface PostState {
    posts: Post[]
  }
  
  const initialState: PostState = {posts: []};
  
  export const postReducer = createReducer(
    initialState,
    on(fetchPostsSuccess, (_,  { posts }) => {
      console.log('posts of fetchPostsSuccess are ', posts);
      return {posts: posts};
    })
  );
  