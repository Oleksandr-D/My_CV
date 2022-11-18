import { Component, OnInit } from '@angular/core';
import { IPostResponse } from 'src/app/shared/interfaces/task6/adminBlog.interface';
import { AdminBlogService } from 'src/app/shared/services/adminBlog/admin-blog.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public adminPosts: Array <IPostResponse> = []; 

  constructor(
    private AdminBlogService:AdminBlogService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts():void{
    this.AdminBlogService.getAll().subscribe(data => {
      this.adminPosts = data;
      console.log(' ==>', data);
    })
  }

}
