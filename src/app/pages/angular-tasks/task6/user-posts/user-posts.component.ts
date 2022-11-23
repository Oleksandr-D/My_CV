import { Component, OnInit } from '@angular/core';
import { IPostResponse } from 'src/app/shared/interfaces/task6/adminBlog.interface';
import { AdminBlogService } from 'src/app/shared/services/adminBlog/admin-blog.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  public userPosts: Array <IPostResponse> = []; 

  constructor(
    private AdminBlogService:AdminBlogService
  ) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts():void{
    this.AdminBlogService.getAll().subscribe(data => {
      this.userPosts = data;
      console.log('user Posts site ==>', data);
    })
  }
}
