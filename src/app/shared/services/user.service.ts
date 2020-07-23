import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User} from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getPostLikes(id){
    return this.http.get<User[]>(`${environment.apiUrl}posts/${id}/likes`);
  }

  findbyName(name): Observable<User[]>{
    return this.http.get<User[]>(environment.apiUrl + 'search?firstname=' + name);
  }
  findbyId(id){
    return this.http.get<User>(`${environment.apiUrl}users/${id}`);
  }
  getme(){
    return this.http.get<User>(`${environment.apiUrl}getme`);
  }
  getMyFollows(){
    return this.http.get<User[]>(`${environment.apiUrl}getmyfollows`);
  }


  update(id, user){
    return this.http.put<User>(`${environment.apiUrl}users/${id}`, user);
  }
}
