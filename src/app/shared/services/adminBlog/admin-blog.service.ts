import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IPostRequest, IPostResponse } from '../../interfaces/task6/adminBlog.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminBlogService {
  private url = environment.BACKEND_URL;
  private api = { blog: `${this.url}/posts` };

  constructor(private http: HttpClient) {};

  //get data from
  getAll(): Observable < IPostResponse[] > {
    return this.http.get < IPostResponse[] > (this.api.blog);
  }

  //create and post 
  create(post: IPostRequest): Observable < IPostResponse > {
    return this.http.post < IPostResponse > (this.api.blog, post);
  };

  //delete post
  delete(id: number): Observable < void > {
    return this.http.delete < void > (`${this.api.blog}/${id}`);
  };
  
  //edit post button save
  editPost(post: IPostRequest, id: number): Observable < IPostResponse > {
    return this.http.patch < IPostResponse > (`${this.api.blog}/${id}`, post);
  };
}