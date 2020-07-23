import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/post.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getUserPosts(id): Observable<Post[]>{
    return this.http.get<Post[]>(`${environment.apiUrl}users/${id}/posts`).pipe(map((posts) => posts.map((post) => post = new Post(post))));
  }
  post(post): Observable<Post>{
    return this.http.post<Post>(`${environment.apiUrl}posts`, post);
  }
  getMyFeed(){
    return this.http.get<Post[]>(`${environment.apiUrl}myfeed`);
  }
}
