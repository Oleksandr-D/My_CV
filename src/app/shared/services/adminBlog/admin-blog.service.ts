import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IBlogResponse } from '../../interfaces/task6/adminBlog.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminBlogService {
  private url = environment.BACKEND_URL;
  private api = { blog: `${this.url}/posts`};

  constructor(
    private http: HttpClient
  ) { }

  getAll():Observable < IBlogResponse[] > {
    return this.http.get< IBlogResponse[] >(this.api.blog);
  }
}
