import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PostService } from '../service/post-service.service';
import { fetchPosts, fetchPostsFailure, fetchPostsSuccess } from './post.action';
import { of } from 'rxjs'
import { Post } from '../model/post.model';

@Injectable()
export class PostEffects {
  fetchPosts$ = createEffect(() => this.actions$.pipe(
    ofType(fetchPosts),
    mergeMap(() => this.postService.getPosts()
      .pipe(
        map((posts: Post[]) => {
          console.log('posts are ', posts);
          return fetchPostsSuccess({posts: posts});
        }),
        catchError(err => of(fetchPostsFailure({err: err}))))
    ))
  );
 
  constructor(
    private actions$: Actions,
    private postService: PostService
  ) {}
}