import { createAction, props } from '@ngrx/store';
import { Post } from './post.model';

export const fetchPosts = createAction('[Post Component] FetchPosts');
export const fetchPostsSuccess = createAction('[Post Component] FetchPostsSuccess',  props<{posts: Post[]}>());
export const fetchPostsFailure = createAction('[Post Component] FetchPostsFailure', props<{err: Error}>());
