import {
  createReducer, on,
} from '@ngrx/store';
import { fetchPostsSuccess } from '../post.action';
import { Post } from '../post.model';

export interface State {
  posts: Post[]
}

const initialState: State = {posts: []};

export const reducers = createReducer(
  initialState,
  on(fetchPostsSuccess, (state, { posts }) => {
    console.log('posts of fetchPostsSuccess are ', posts);
    return {posts: posts};
  })
);
