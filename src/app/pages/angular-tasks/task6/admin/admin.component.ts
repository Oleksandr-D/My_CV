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
  public title!: string;
  public text!: string;
  public autor!: string;
  public imagePath!:string;
  public editStatus = false;
  public editID!: number;

  constructor( private AdminBlogService:AdminBlogService ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts():void{
    this.AdminBlogService.getAll().subscribe(data => {
    this.adminPosts = data;
      console.log(' ==>', data);
    })
  }

  //button add. created new post
  addPost(): void {
    if (this.adminPosts.length < 4) {
      const newPost = {
        title: this.title,
        text: this.text,
        autor: this.autor,
        imagePath:this.imagePath
      }
      this.AdminBlogService.create(newPost).subscribe((): void => {
        this.getPosts();
        this.resetForm();
      })
    }
  }
  //button delete
  deletePost(post: IPostResponse): void {
    if (confirm('Delete? Are you shure?')) {
      this.AdminBlogService.delete(post.id).subscribe(() => {
        this.getPosts()
      });
    }
  }
  //button edit Post
  editPost(post: IPostResponse): void {
    this.title = post.title;
    this.text = post.text;
    this.autor = post.autor;
    this.editStatus = true;
    this.editID = post.id;
    this.imagePath = post.imagePath;
  }
  //save button
  save(): void {
    const updatePost = {
      title: this.title,
      text: this.text,
      autor: this.autor,
      imagePath:this.imagePath
    };
    this.AdminBlogService.editPost(updatePost, this.editID).subscribe(() => {
      this.getPosts();
      this.resetForm();
      this.editStatus = false;
    })
  }
  //clear form
  resetForm() {
    this.title = '';
    this.text = '';
    this.autor = '';
    this.imagePath ='';
  }

}
