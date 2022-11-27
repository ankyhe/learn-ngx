import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { Post } from "./post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  host: string;

  constructor (private http: HttpClient) {
    this.host = 'https://jsonplaceholder.typicode.com';
  }

  getPosts(): Observable<Post[]> {
    const url = `${this.host}/posts`
    return this.http.get<Post[]>(url);
  }
}