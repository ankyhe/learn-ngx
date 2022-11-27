import {
    createReducer, on,
  } from '@ngrx/store';
  import { fetchPostsSuccess } from './post.action';
  import { Post } from '../model/post.model';
  
  export interface State {
    posts: Post[]
  }
  
  const initialState: State = {posts: []};
  
  export const reducers = createReducer(
    initialState,
    on(fetchPostsSuccess, (_,  { posts }) => {
      console.log('posts of fetchPostsSuccess are ', posts);
      return {posts: posts};
    })
  );
  