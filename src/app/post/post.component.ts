import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchPosts } from '../post.action';
import { Observable } from 'rxjs';
import { Post } from '../post.model';
import { State } from '../reducers';
import { getStatePosts } from '../post.selector'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  posts$: Observable<Post[]>;
 
  constructor(private store: Store<State>) {
    this.posts$ = this.store.select(getStatePosts);
  }
 
  ngOnInit() {
    console.log('ENTER post.component.ts.ngOnInit');
    this.store.dispatch(fetchPosts());
  }
}
